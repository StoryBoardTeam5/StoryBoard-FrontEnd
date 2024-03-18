import React from 'react'

import { Button } from '../ui/button'
import { FormError } from '../form-error'

interface PostTestProps {
  SwitchGameModeToDialog: (dialogID: string) => void
  NextDialogRefID: string
  setTypingTestFinished: React.Dispatch<React.SetStateAction<boolean>>
}

const PostTest = ({ SwitchGameModeToDialog, NextDialogRefID, setTypingTestFinished }: PostTestProps ) => {

  return (
    <div className='flex flex-col h-64 justify-evenly'>
      <FormError message='CURRENTLY UNDER CONSTRUCTION' />
      <p>Results from Typing Test Will Go Here</p>
      <Button onClick={() => SwitchGameModeToDialog(NextDialogRefID)}>Continue</Button>
      <Button onClick={() => setTypingTestFinished(false)}>Retry</Button>
    </div>
  )
  return
}

export default PostTest
