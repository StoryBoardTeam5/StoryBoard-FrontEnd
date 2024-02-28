import React from 'react'

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return <div className='flex h-full w-full flex-col items-center justify-center gap-y-10'>{children}</div>
}

export default ProtectedLayout
