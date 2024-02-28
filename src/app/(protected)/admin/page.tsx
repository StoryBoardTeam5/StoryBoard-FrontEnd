'use client'

import React from 'react'

import GateKeeper from '@/components/auth/gatekeeper'
import { FormSuccess } from '@/components/form-success'

const AdminPage = () => {
  return (
    <GateKeeper allowedRole='ADMIN'>
      <FormSuccess message='You are an admin!' />
    </GateKeeper>
  )
}

export default AdminPage
