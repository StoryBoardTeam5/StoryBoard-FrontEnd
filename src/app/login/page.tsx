/*
File name     : src/app/login/page.tsx
Description   : Login page for StoryBoard
LastEditBy    : Vance Malekani
CreatedDate   : 2023-10-22
Revisions :
  2023-11-03 - Add Comments / Styling Updates
Preconditions: N/A
Postconditions: Login page is rendered
*/
'use client'

import React, { useState } from 'react'

import Link from 'next/link'

// Login Component Here (TODO: Turn into modal)
export const Login = () => {
  const [userName, setUser] = useState('')
  const [pass, setPass] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userName)
  }

  return (
    <div className='h-screen z-10 flex w-full content-center items-center justify-center bg-gray-900'>
      <form className='space-y-2 md:space-y-4' action='#' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='userName' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
            Username{' '}
          </label>
          <input
            value={userName}
            onChange={(e) => setUser(e.target.value)}
            type='userName'
            placeholder=' Username'
            id='userName'
            className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
            name='userName'
          />
        </div>
        <div>
          <label htmlFor='passsword' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
            {' '}
            password{' '}
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type='password'
            placeholder='Password'
            id='password'
            name='password'
            className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
          />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-start'>
            <div className='h-5 flex items-center'>
              <input
                id='remember'
                aria-describedby='remember'
                type='checkbox'
                className='h-4 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
              />
            </div>
            <div className='ml-3 text-sm'>
              <label htmlFor='remember' className='text-gray-500 dark:text-gray-300'>
                Remember me
              </label>
            </div>
          </div>
          <a href='/register' className='text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline'>
            {' '}
            Forgot password?{' '}
          </a>
        </div>
        <button
          type='submit'
          className='bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
        >
          {' '}
          Enter StoryBoard!{' '}
        </button>
        <div>
          <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
            Don’t have an account yet?{' '}
            <Link href='/register' className='text-primary-600 dark:text-primary-500 font-medium hover:underline'>
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
