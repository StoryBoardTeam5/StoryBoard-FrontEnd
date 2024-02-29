'use client'

import React from 'react'

import { useCurrentRole } from '@/hooks/useCurrentRole'

import { FormError } from '../form-error'

interface GateKeeperProps {
  children: React.ReactNode
  allowedRole: string
}

const GateKeeper = ({ children, allowedRole }: GateKeeperProps) => {
  const role = useCurrentRole()
  if (!role) {
    return <></>
  }
  if (role !== allowedRole) {
    return <FormError message='You do not have permission to view this content!'></FormError>
  }
  return <>{children}</>
}

export default GateKeeper
