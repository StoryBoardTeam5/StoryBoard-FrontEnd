import authConfig from '@/auth.config'
import { getAccountByUserId } from '@/data/account'
import { getUserById, linkAccount } from '@/data/user'
import clientPromise from '@/lib/db'
import { LoginSchema } from '@/schemas'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

declare module 'next-auth' {
  interface User {
    id?: string
    role: string
    isOAuth: boolean
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async jwt({ token, trigger }) {
      if (!token.sub) return token
      if (trigger === 'signIn' || trigger === 'signUp') {
        const existingUser = await getUserById(token.sub)
        if (!existingUser) return token
        const existingAccount = await getAccountByUserId(existingUser.id)

        token.isOAuth = !!existingAccount
        token.role = existingUser.role
        token.name = existingUser.name
        token.email = existingUser.email
        token.role = existingUser.role
      }
      return token
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as 'ADMIN' | 'USER'
      }
      if (session.user) {
        session.user.name = token.name
        session.user.email = token.email as string
        session.user.isOAuth = token.isOAuth as boolean
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  ...authConfig,
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: 'StoryBoard',
  }),
  session: { strategy: 'jwt' },
  events: {
    async linkAccount({ user }) {
      await linkAccount(user.id)
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const client = await clientPromise
          const db = client.db('StoryBoard')

          const user = await db.collection('users').findOne({ email })
          if (!user || !user.password) return null
          user.id = user._id

          const passwordsMatch = await bcrypt.compare(password, user.password)
          // eslint-disable-next-line
          if (passwordsMatch) return user as any
        }

        return null
      },
    }),
  ],
})
