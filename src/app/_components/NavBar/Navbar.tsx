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

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const handleMenu = () => {
    console.log('menu clicked')
  }

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    console.log(`Theme changed to ${theme}`)
  }

  return (
    <header id='header'>
      <div className='h-16 mx-auto flex max-w-screen-xl items-center gap-8 p-4 px-4 sm:px-6 lg:px-8'>
        <Link className='z-10 block text-colors-primary-800 dark:text-colors-primary-200' href='/'>
          <div className='ml-4 text-4xl'>
            <AiOutlineHome />
          </div>{' '}
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
            <div className='sm:flex sm:gap-6'>
              <Link
                className='rounded-md bg-colors-secondary-200 px-5 py-2.5 text-sm font-medium transition hover:bg-colors-secondary-300 dark:bg-colors-secondary-800 dark:hover:bg-colors-secondary-700'
                href='/login'
              >
                Login
              </Link>

              <Link
                className='rounded-md bg-colors-primary-800 px-5 py-2.5 text-sm font-medium text-colors-text-100 transition hover:text-colors-secondary-400 dark:bg-colors-primary-200 dark:text-colors-secondary-800 dark:hover:text-colors-secondary-600'
                href='/register'
              >
                Register
              </Link>
              <button
                className='text-md rounded-md bg-colors-primary-800 px-5 py-2.5 font-medium text-colors-text-100 transition hover:text-colors-secondary-400 dark:bg-colors-primary-200 dark:text-colors-secondary-800 dark:hover:text-colors-secondary-600'
                onClick={handleThemeChange}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            <button
              onClick={handleMenu}
              className='block rounded bg-colors-accent-600 p-2.5 text-colors-text-200 transition hover:text-colors-text-400 dark:bg-colors-accent-400 dark:text-colors-text-800 dark:hover:text-colors-text-100 md:hidden'
            >
              <span className='sr-only'>Toggle menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
