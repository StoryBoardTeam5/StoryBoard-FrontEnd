'use client'

import React from 'react'

import { Logout } from '@/actions/logout'
import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/useCurrentUser'

const SettingsPage = () => {
  const user = useCurrentUser()

  const handleLogout = async () => {
    await Logout()
  }

  return (
    <div className='flex h-full flex-col items-center justify-center'>
      {JSON.stringify(user)}
      <form action={handleLogout}>
        <Button type='submit'>Sign out</Button>
      </form>
    </div>
  )
}

export default SettingsPage
