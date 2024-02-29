import PasswordResetToken from '@/lib/models/PasswordResetToken'

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await PasswordResetToken.findOne({
      token,
    })

    return passwordResetToken
  } catch {
    return null
  }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await PasswordResetToken.findOne({
      email,
    })

    return passwordResetToken
  } catch {
    return null
  }
}
