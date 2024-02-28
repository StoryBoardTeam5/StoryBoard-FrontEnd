'use server'

import User from '@/lib/models/User'
import { RegisterSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import * as z from 'zod'

export const Register = async (credentials: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(credentials)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }
  const { name, email, password } = validatedFields.data

  const formattedEmail = email.trim().toLowerCase()
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await User.findOne({ email: formattedEmail })

  if (existingUser) {
    return { error: 'Email already in use!' }
  }

  await User.create({
    name,
    email: formattedEmail,
    password: hashedPassword,
    role: 'USER'
  })

  return { success: 'Account was created Successfully!' }
}
