import React from 'react'

import clsx from 'clsx'

import Caret from './Caret'

const UserTypings = ({
  userInput,
  words,
  className = '',
}: {
  userInput: string
  words: string
  className?: string
}) => {
  const typedCharacters = userInput.split('')

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => (
        <Character key={`${char}_${index}`} actual={char} expected={words[index]} />
      ))}
      <Caret />
    </div>
  )
}

const Character = ({ actual, expected }: { actual: string; expected: string }) => {
  const isCorrect = actual === expected
  const isWhiteSpace = expected === ' '
  return (
    <span
      className={clsx({
        'text-red-500': !isCorrect && !isWhiteSpace,
        'text-emerald-600': isCorrect && !isWhiteSpace,
        'bg-red-500/50': !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  )
}

export default UserTypings
