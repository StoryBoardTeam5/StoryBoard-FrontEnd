/*
File name     : src/app/page.tsx
Description   : Home page of the application https://storyboard-frontend.vercel.app/
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-09-22
Revisions  :
  2023-11-03 - Add Comments
  2023-11-05 - Styling updates
Preconditions: N/A
Postconditions:
*/

import React from 'react'

import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'
import { currentUser } from '@/lib/auth'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

const page = async () => {
  const user = await currentUser()
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <div className='space-y-6 text-center'>
        <h1 className={cn('text-6xl font-semibold text-primary ', font.className)}>Welcome to StoryBoard</h1>
        <div className='flex justify-evenly'>
          {!user ? (
            <LoginButton>
              <Button size='lg' variant='default'>
                Sign In to Play
              </Button>
            </LoginButton>
          ) : (
            <Link href={'/play'}>
              <Button size='lg' variant={'outline'}>
                Play Now
              </Button>
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}

export default page
