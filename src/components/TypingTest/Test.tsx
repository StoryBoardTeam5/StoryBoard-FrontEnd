import React from 'react'

import { FormError } from '../form-error'
import { Button } from '../ui/button'
import useEngine, { calculateAccuracyPercentage } from './hooks/useEngine'
import Results from './Results'
import UserTypings from './UserInput'
import { SaveUserProgress } from '../../actions/SaveUserProgress'

interface TypingTestProps {
  SwitchGameModeToDialog: (dialogID: string) => void
  NextDialogRefID: string
}

const TypingTest = ({ SwitchGameModeToDialog, NextDialogRefID }: TypingTestProps) => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped, wordsPerMinute } = useEngine()

  // Set the typing test to finished
  const handleTestFinished = () => {
    SaveUserProgress(NextDialogRefID)
    SwitchGameModeToDialog(NextDialogRefID)
  }

  const WordsContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className='relative mt-3 max-w-6xl break-all text-3xl leading-relaxed'>{children}</div>
  }
  const GeneratedWords = ({ words }: { words: string }) => {
    return <div className='text-slate-500 '>{words}</div>
  }

  const CountDownTimer = ({ timeLeft }: { timeLeft: number }) => {
    return <h2 className='font-medium'>Time: {timeLeft}</h2>
  }
  return (
    <div className='flex flex-col'>
      {state === 'start' && (
        <FormError
          message='Test will start when typing starts'
          className='m-8 flex flex-col text-center text-6xl'
        ></FormError>
      )}
      <CountDownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords key={words} words={words} />
        <UserTypings className='absolute inset-0' words={words} userInput={typed} />
      </WordsContainer>
      <Results
        className='mt-10'
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
        wpm={wordsPerMinute}
      />

      {state === 'finish' && (
        <div className='flex justify-evenly p-8'>
          <Button size={'xl'} className='w-1/3' onClick={handleTestFinished}>
            Continue
          </Button>
          <Button size={'xl'} className='w-1/3' onClick={() => restart()}>
            Retry
          </Button>
        </div>
      )}
    </div>
  )
}

export default TypingTest
