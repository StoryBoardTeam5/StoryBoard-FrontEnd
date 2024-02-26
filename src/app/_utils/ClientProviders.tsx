'use client'

import React, { useEffect } from 'react'

import { ThemeProvider } from 'next-themes'

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {

  // This is to prevent hydration issues with nextjs 13 app router
  const [mounted , setMounted] = React.useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return <>{children}</>

  return <><ThemeProvider enableSystem={true} attribute='class' >{children}</ThemeProvider></>
}
