'use server'

import { signIn } from '@/auth'
import { LoginSchema } from '@/schemas'
import { AuthError } from 'next-auth'
import * as z from 'zod'
import { isRedirectError } from "next/dist/client/components/redirect";
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const Login = async (credentials: z.infer<typeof LoginSchema>, callbackUrl?: string | null) => {
  const validatedFields = LoginSchema.safeParse(credentials)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }
  const { email, password } = validatedFields.data
  const formattedEmail = email.trim().toLowerCase()
  try {
    await signIn('credentials', {
      email: formattedEmail,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    })
    return { success: 'Logged in!' }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials! Please Try Again' }
        case 'CallbackRouteError':
          return { error: error?.cause?.err?.toString() }
        default:
          return { error: 'Something went wrong!' }
      }
    }

    throw error
  }
}