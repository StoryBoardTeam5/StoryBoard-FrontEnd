import React from 'react'

import { FaExclamationTriangle } from 'react-icons/fa'

import { CardWrapper } from './card-wrapper'

const ErrorCard = () => {
  return (
    <CardWrapper headerLabel='Oops! Something went wrong!' backButtonHref='/auth/login' backButtonLabel='Back to Login'>
      <FaExclamationTriangle className='flex w-full items-center justify-center text-3xl text-destructive' />
    </CardWrapper>
  )
}

export default ErrorCard
