import React from 'react'

import { AlertTriangleIcon } from 'lucide-react'

interface FormErrorProps {
  message?: string
  className?: string
}

export const FormError = ({ message, className }: FormErrorProps) => {
  if (!message) return null
  return (
    <div
      className={`flex items-center gap-x-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive dark:bg-destructive/40 dark:text-red-500 ${className}`}
    >
      <AlertTriangleIcon className='h-4 w-4' />
      <p>{message}</p>
    </div>
  )
}
