/*
File name     : src/app/register/page.tsx
Description   : Register page for StoryBoard
LastEditBy    : Vance Malekani
CreatedDate   : 2023-10-22
Revisions  :
  2023-11-03 - Add Comments
Preconditions: N/A
Postconditions: Register page is rendered
*/
'use client'

import React, { useState } from 'react'

import Link from 'next/link'

// Register Component Here (TODO: Turn into modal)
const Register = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')
  const [userName, setUser] = useState('')
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className='h-screen z-10 flex w-full content-center items-center justify-center bg-gray-900'>
      <form className='space-y-2 md:space-y-4' action='#' onSubmit={handleSubmit}>
        <div>
          <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'> Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name='name'
            id='name'
            placeholder='Full Name'
            className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
          />
        </div>
        <div>
          <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'> Username</label>
          <input
            value={userName}
            onChange={(e) => setUser(e.target.value)}
            name='username'
            id='userName'
            placeholder='Create Username'
            className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
          />
        </div>
        <div>
          <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
            email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='youremail@gmail.com'
            id='email'
            name='email'
            className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
          />
        </div>
        <div>
          <label htmlFor='password' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
            Password
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type='password'
            placeholder='Create Password'
            id='password'
            name='password'
            className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
          />
        </div>

        <button
          type='submit'
          className='bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
        >
          Register
        </button>
        <div>
          <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
            Already Have an account?{' '}
            <Link href='/login' className='text-primary-600 dark:text-primary-500 font-medium hover:underline'>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
