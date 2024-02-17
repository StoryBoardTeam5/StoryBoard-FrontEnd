'use client'

import React from 'react'

import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'

import { store } from '../_redux/store'

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute='class'>
        {children}
      </ThemeProvider>
    </Provider>
  )
}
