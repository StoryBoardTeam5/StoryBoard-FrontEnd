'use server'

import { getProgress } from "@/data/user"
import { currentUser } from "@/lib/auth"


export const GetUserProgress = async () => {
  const user = await currentUser()
  return await getProgress(user?.id)
}