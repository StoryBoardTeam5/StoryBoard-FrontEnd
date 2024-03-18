import React, { Dispatch, SetStateAction } from 'react'

import { FormError } from '../form-error'
import { Button } from '../ui/button'

interface TypingTestProps {
  setTypingTestFinished: Dispatch<SetStateAction<boolean>>
}

const TypingTest = ({ setTypingTestFinished }: TypingTestProps) => {
  const handleTestFinished = () => {
    setTypingTestFinished(true)
  }
  return (
    <div className='flex flex-col'>
      <FormError message='CURRENTLY UNDER CONSTRUCTION' />
      <p>Typing Test Will Go Here</p>
      <Button onClick={handleTestFinished}>Finish Test</Button>
    </div>
  )
}

export default TypingTest
