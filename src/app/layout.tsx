/*
File name     : src/app/layout.tsx
Description   : Layout of the application includes MetaData, font, Navbar, and children
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-09-22
Revisions  :
  2023-11-03 - Add Comments
Preconditions: N/A
Postconditions: Layout (Shell) of website is rendered
*/

import React from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import Navbar from './_components/NavBar/Navbar'

const inter = Inter({ subsets: ['latin'] }) // For font selection throughout website

export const metadata: Metadata = {
  title: 'StoryBoard',
  description: '', //TODO: Add description
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className /* For font selection */ + 'h-screen, bg-gray-900 text-white'}>
        <Navbar />
        {children /* All pages on website are rendered here */}
      </body>
    </html>
  )
}
