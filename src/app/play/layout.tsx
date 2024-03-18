'use client'

import React from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '../_redux/store'

interface PlayLayoutProps {
  children: React.ReactNode
}

const PlayLayout = ({ children }: PlayLayoutProps) => {
  const backgroundImage = useSelector((state: RootState) => state.backgroundImage.value)

  return (
    <>
      <div
        className='-z-50 flex min-h-screen w-full'
        style={{
          backgroundImage: backgroundImage ? `url(/${backgroundImage}.png)` : `none`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {children}
      </div>
    </>
  )
}

export default PlayLayout
