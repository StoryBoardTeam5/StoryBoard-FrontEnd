/*
File name     : src/app/login/page.tsx
Description   : Login page for StoryBoard
LastEditBy    : Vance Malekani 
CreatedDate   : 2023-10-22
Revisions :
  2023-11-03 - Add Comments
Preconditions: N/A
Postconditions: Login page is rendered
*/
'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link'


// Login Component Here (TODO: Turn into modal)
export const Login = () => {
  const [userName, setUser] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
  }


  return (
    <div className='z-10 flex h-screen w-full content-center items-center justify-center bg-gray-900'>
      
      <form className="space-y-2 md:space-y-4" action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username </label>
          <input value={userName} onChange={(e) => setUser(e.target.value)} type="userName" placeholder=" Username" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="userName" />
        </div>
        <div>
          <label htmlFor="passsword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> password </label>
          <input value={userName} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="/register" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"> Forgot password? </a>
                  </div>
        <button type="submit"className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Enter StoryBoard! </button>
      <div>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
      </p>
      </div>
      </form>
    </div>
  )
}

export default Login
