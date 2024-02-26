'use client'

import React from 'react'

import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'

import { store } from '../_redux/store'
import { useLoaded } from './useLoaded'

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {

  const loaded = useLoaded()

  return ( loaded &&
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute='class'>
        {children}
      </ThemeProvider>
    </Provider>
  )
}
