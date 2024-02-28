'use server'

import { getPasswordResetTokenByEmail } from '@/data/password-reset-token'
import PasswordResetToken from '@/lib/models/PasswordResetToken'
import { v4 as uuidv4 } from 'uuid'

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)
  const existingToken = await getPasswordResetTokenByEmail(email)
  if (existingToken) {
    await PasswordResetToken.findOneAndDelete({
      email,
    })
  }
  const passwordResetToken = await PasswordResetToken.create({
    email,
    token,
    expires,
  })

  return passwordResetToken
}
