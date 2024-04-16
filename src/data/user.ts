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

export const saveProgress = async (id?: string, progress?: string) => {
  await User.findOneAndUpdate(
    { _id: id},
    {
      $set: {
        storyProgress: progress,
      },
    },
  )
}


export const getProgress = async (id?: string) => {
  const user = await User.findOne({
    _id: id,
  })
  return user?.storyProgress
}

