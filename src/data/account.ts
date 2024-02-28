import Accounts from '@/lib/models/Account'

export const getAccountByUserId = async (userId?: string) => {
  const account = await Accounts.findOne({ userId })
  return account
}
