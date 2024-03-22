'use client'

import React from 'react'

import { FormError } from '../form-error'
// import { FormError } from '../form-error'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'

interface PreTestProps {
  challengeText: string
  text: string
  challenge: string
  timer: number
  maxpoints: number
  NextDialogRefID: string
  setTypingTestStarted: React.Dispatch<React.SetStateAction<boolean>>
  SwitchGameModeToDialog: (dialogID: string) => void
}

const PreTest = ({
  challengeText,
  text,
  challenge,
  timer,
  maxpoints,
  NextDialogRefID,
  setTypingTestStarted,
  SwitchGameModeToDialog,
}: PreTestProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{challengeText}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col '>
          <div className='p-8'>{text}</div>
          <div className='flex text-lg'>
            <p className='mr-4 text-lg font-bold'>Challenge: </p> {challenge}{' '}
          </div>
          <div className='flex text-lg'>
            <p className='mr-4 font-bold'>Timer: </p>
            {timer} seconds
          </div>
          <div className='flex text-lg'>
            <p className='mr-4 text-lg font-bold'>Max Points Available:</p>
            {maxpoints}
          </div>
          {/* <div className='flex text-lg'><p className='text-lg mr-4 font-bold'>Next Dialog Ref ID: </p> {NextDialogRefID}</div> */}
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex w-full justify-evenly'>
          <Button size={'xl'} onClick={() => setTypingTestStarted(true)}>
            Start Typing Test!
          </Button>
          <Button size={'xl'} onClick={() => SwitchGameModeToDialog(NextDialogRefID)}>
            Skip Typing Test!
          </Button>
        </div>
      </CardFooter>
      <FormError message='CURRENTLY UNDER CONSTRUCTION' />
    </Card>
  )
}

export default PreTest
