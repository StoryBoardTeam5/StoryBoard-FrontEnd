import React from 'react'

import GateKeeper from '@/components/auth/gatekeeper'

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-y-10'>
      <GateKeeper allowedRole='ADMIN'>{children}</GateKeeper>
    </div>
  )
}

export default ProtectedLayout
