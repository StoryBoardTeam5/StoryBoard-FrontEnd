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

import Link from 'next/link'

const page = () => {
  return (
    <section className='flex h-screen-with-nav'>
      <div className='m-auto'>
        <h1 className='bg-gradient-to-r from-colors-primary-300 via-colors-secondary-600 to-colors-accent-900 bg-clip-text pb-1 text-3xl font-extrabold text-transparent sm:text-5xl'>
          Welcome to StoryBoard
          {/* <span className="sm:block"> Choose your story</span> */}
        </h1>
        <div className='mt-8 flex justify-center gap-4'>
          <Link
            className='rounded border border-colors-primary-600 bg-colors-primary-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-colors-primary-600 sm:w-auto'
            href='/play'
          >
            Play Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default page
