/*
File name     : src/app/_utils/types.ts
Description   : Collection of types used in the application
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-11-03
Revisions  :
  2023-11-03 - Creation of Login page
Preconditions: N/A
Postconditions: Layout (Shell) of website is rendered
*/

import NextAuth from 'next-auth/next'
import Github from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],

  /* Use this later when we have pages for the signin/register/signout */

  // pages: {
  //   signIn: 'test/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error',
  //   verifyRequest: '/auth/verify-request',
  //   newUser: '/auth/new-user',
  // },
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
