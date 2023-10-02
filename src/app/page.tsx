import React from 'react'

import Link from 'next/link'

const page = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto flex h-screen max-w-screen-xl items-center px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text pb-1 text-3xl font-extrabold text-transparent sm:text-5xl">
            Welcome to StoryBoard
            {/* <span className="sm:block"> Choose your story</span> */}
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            StoryBoard is a blah blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit
            maxime quos, eius accusantium fugiat!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/typingtest"
            >
              Play Now
            </Link>

            <Link
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/about"
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
