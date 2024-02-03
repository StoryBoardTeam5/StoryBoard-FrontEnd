'use client'

import React, { useEffect } from 'react'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  // This is to prevent hydration issues with nextjs 13 app router
  const [mounted, setMounted] = React.useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return <></>

  return (
    <>
      <ThemeProvider enableSystem={true} attribute='class'>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </>
  )
}
