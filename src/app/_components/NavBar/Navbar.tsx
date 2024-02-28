/*
File name     : src/app/_components/NavBar/Navbar.tsx
Description   : Contains the navigation bar at top of the page
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-10-22
Revisions  :
  2023-11-03 - Add Comments
  2023-11-05 - Styling updates
Preconditions: N/A
Postconditions:
  - Navigation bar is rendered
  - Navigation bar is responsive
*/
'use client'

import React from 'react'

import { Logout } from '@/actions/logout'
import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const user = useCurrentUser()
  const handleLogout = async () => {
    await Logout()
  }

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header id='header'>
      <div className='fixed left-1/2 top-0 z-10 mx-auto flex h-16 w-full max-w-screen-xl -translate-x-1/2 transform items-center gap-8 rounded-b-xl bg-muted p-4 px-4 duration-300 ease-in sm:px-6 lg:px-8'>
        <Link className='z-10 block text-primary' href='/'>
          <div className='ml-4 text-4xl'>
            <AiOutlineHome />
          </div>
        </Link>

        <div className='z-10 flex flex-1 items-center justify-end md:justify-between'>
          <nav aria-label='Global' className='hidden md:block'>
            {/* Use this if we want extra navigation in the menu*/}
            {/* <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Stats
                </Link>
              </li>
            </ul> */}
          </nav>

          <div className='flex items-center gap-4'>
            <div className='flex sm:gap-6'>
              {user ? (
                <form action={handleLogout}>
                  <Button type='submit' variant='default'>
                    Sign out
                  </Button>
                </form>
              ) : (
                <LoginButton>
                  <Button variant='default'>Sign In</Button>
                </LoginButton>
              )}

              <Button variant='default'>
                <Link href='/ClickToPlay'>New Game</Link>{' '}
              </Button>

              <Button onClick={handleThemeChange} variant='default'>
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
