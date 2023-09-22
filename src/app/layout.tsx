import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StoryBoard',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 w-screen h-screen'>
        {children}
        </div>
        </body>
    </html>
  )
}
