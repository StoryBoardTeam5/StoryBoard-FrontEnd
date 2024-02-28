import User from '@/lib/models/User'

export const getUserByEmail = async (email?: string) => {
  const user = await User.findOne({ email })
  return user
}
export const getUserById = async (_id?: string) => {
  const user = await User.findOne({
    _id,
  })
  return user
}

export const linkAccount = async (id?: string) => {
  console.log('id: ', id)
  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        role: 'USER',
      },
    },
  )
  return user
}
