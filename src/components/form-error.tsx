import React from 'react'

import { AlertTriangleIcon } from 'lucide-react'

interface FormErrorProps {
  message?: string
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null
  return (
    <div className='flex items-center gap-x-2 rounded-md bg-destructive/10 dark:bg-destructive/40 p-3 text-sm text-destructive dark:text-red-500'>
      <AlertTriangleIcon className='h-4 w-4' />
      <p>{message}</p>
    </div>
  )
}
