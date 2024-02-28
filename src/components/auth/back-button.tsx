'use client'

import React from 'react'

import Link from 'next/link'

import { Button } from '../ui/button'

interface BackButtonProps {
  label: string
  href: string
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button variant='link' className='w-full font-normal' size='sm'>
      <Link href={href}>{label}</Link>
    </Button>
  )
}

export default BackButton
