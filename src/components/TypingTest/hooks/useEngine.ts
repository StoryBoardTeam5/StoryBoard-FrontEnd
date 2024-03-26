import { useCallback, useEffect, useState } from 'react'

import { RootState } from '@/app/_redux/store'
import { useSelector } from 'react-redux'

import useCountdown from './useCountdown'
import { usePrompt } from './usePrompt'
import useTypings from './useTypings'

export type State = 'start' | 'run' | 'finish'
export const isKeyboardCodeAllowed = (code: string) => {
  return (
    code.startsWith('Key') ||
    code.startsWith('Digit') ||
    code.startsWith('Quote') ||
    code.startsWith('Minus') ||
    code.startsWith('Slash') ||
    code.startsWith('Comma') ||
    code.startsWith('Period') ||
    code === 'Backspace' ||
    code === 'Space'
  )
}

const countErrors = (actual: string, expected: string) => {
  const expectedCharacters = expected.split('')

  return expectedCharacters.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i]
    if (actualChar !== expectedChar) {
      errors++
    }
    return errors
  }, 0)
}

export const calculateAccuracyPercentage = (errors: number, total: number) => {
  if (total > 0) {
    const corrects = total - errors
    return (corrects / total) * 100
  }
  return 0
}

export const wpm = (timer: number, wordsReached: string) => {
  const minutes = timer / 60
  const wordsPerMinute = Math.round(wordsReached.split(' ').length / minutes)
  return wordsPerMinute
}

export const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0) + '%'
}

const useEngine = () => {
  const [state, setState] = useState<State>('start')
  const { timer } = useSelector((state: RootState) => state.typingTest)
  const { timeLeft, startCountdown, resetCountdown } = useCountdown(timer)
  const words = usePrompt()
  const { cursor, typed, clearTyped, totalTyped, resetTotalTyped } = useTypings(state !== 'finish')
  const [errors, setErrors] = useState(0)
  const [wordsPerMinute, setWordsPerMinute] = useState(0)
  const isStarting = state === 'start' && cursor > 0
  const areWordsFinished = cursor === words.length

  const restart = useCallback(() => {
    resetCountdown()
    resetTotalTyped()
    setState('start')
    setErrors(0)
    clearTyped()
  }, [clearTyped, resetCountdown, resetTotalTyped])

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, Math.min(cursor, words.length))
    setWordsPerMinute(wpm(timer, wordsReached))
    setErrors(countErrors(typed, wordsReached))
  }, [typed, words, cursor])

  // as soon the user starts typing the first letter, we start
  useEffect(() => {
    if (isStarting) {
      setState('run')
      startCountdown()
    }
  }, [isStarting, startCountdown])

  // when the time is up or words are typed, we've finished (Might have to have a case for WPM to update based on if areWordsFinished is true)
  useEffect(() => {
    if ((!timeLeft && state === 'run') || areWordsFinished) {
      setState('finish')
      sumErrors()
    }
  }, [timeLeft, state, sumErrors, areWordsFinished])

  return { state, words, typed, errors, restart, timeLeft, totalTyped, wordsPerMinute }
}

export default useEngine
