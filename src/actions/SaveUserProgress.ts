'use server'

import { saveProgress } from "@/data/user"
import { currentUser } from "@/lib/auth"

export const SaveUserProgress = async (NextDialogRefID: string) => {
  const user = await currentUser()
  await saveProgress(user?.id, NextDialogRefID)
}