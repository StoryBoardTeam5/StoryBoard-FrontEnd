import React from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import bgImg from './_assets/bg-img.png'

import './globals.css'

import Image from 'next/image'

import Navbar from './_components/Navbar'

const inter = Inter({ subsets: ['latin'] }) // For font selection

export const metadata: Metadata = {
  title: 'StoryBoard',
  description: '', //TODO: Add description
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className /* For font selection */}>
        <Image src={bgImg} alt="" className="absolute h-screen-with-nav opacity-30" />
        <Navbar />
        {children /* All pages on website are rendered here */}
      </body>
    </html>
  )
}
