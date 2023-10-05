'use client'

import React, { useState } from 'react'

const TypingTest = () => {
  const [prompt, setPrompt] = useState('')
  const [untypedWords, setUntypedWords] = useState([''])
  const [completedWords, setCompletedWords] = useState([''])
  const [inputValue, setInputValue] = useState('')
  const [started, setStarted] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [wpm, setWpm] = useState(0)

  /* Get the prompt of what we want the user to type here from MongoDB here */
  const SetPrompt = () => {
    const prompt = `The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.`
    setPrompt(prompt)
    setUntypedWords(prompt.split(' '))
    setCompletedWords([])
  }

  /* Called at start and when Makes sure the input is always in focus */
  const focusInput = () => {
    const input = document.getElementById('input')
    input?.focus()
  }

  const startGame = () => {
    setInputValue('')
    focusInput()
    SetPrompt()
    setStarted(true)
    setCompleted(false)
    setStartTime(Date.now())
    setInterval(calculateWPM, 1000)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const lastLetter = inputValue[inputValue.length - 1]
    const currentWord = untypedWords[0]

    if (lastLetter === ' ' || lastLetter === '.') {
      if (inputValue.includes(currentWord)) {
        // current word has been typed
        const newWords = [...untypedWords.slice(1)]
        const newCompletedWords = [...completedWords, currentWord]
        setUntypedWords(newWords)
        setCompletedWords(newCompletedWords)
        setInputValue('')
        setCompleted(newWords.length === 0)
      }
    } else {
      setInputValue(inputValue)
    }
  }

  const calculateWPM = () => {
    const now = Date.now()
    const diff = (now - startTime) / 1000 / 60
    console.log('Bowser', completedWords.length)
    const wordsTyped = completedWords.length
    const wpm = Math.ceil(wordsTyped / diff)
    setWpm(wpm)
    setTimeElapsed(diff)
    console.log('wpm', wpm)
  }
  const timer = Math.ceil(60 - timeElapsed * 60)

  return (
    <div id="body" className="flex h-screen content-center items-center justify-center bg-gray-900">
      <div id="Wrapper" className="aspect-video w-1/2 rounded-lg bg-gray-700 p-8 text-white" onClick={focusInput}>
        <input
          id="input"
          className="absolute opacity-0"
          type="text"
          autoFocus={true}
          autoComplete="off"
          onChange={handleInput}
          value={inputValue}
        />
        <div id="content-box" className="aspect-video rounded-lg border-2 border-slate-600 p-4">
          <div id="typing-test" className="no-scrollbar max-h-60 overflow-y-auto">
            {!started || completed
              ? 'Press start to start'
              : prompt.split(' ').map((word, w_idx) => {
                  let highlight = false
                  let currentWord = false

                  if (completedWords.length > w_idx) {
                    highlight = true
                  }

                  if (completedWords.length === w_idx) {
                    currentWord = true
                  }

                  return (
                    <>
                      {' '}
                      <span
                        key={w_idx}
                        className={`
                                ${highlight && 'text-green-600'} 
                                ${currentWord && 'underline'}`}
                      >
                        {word.split('').map((letter, l_idx) => {
                          const isCurrentWord = w_idx === completedWords.length
                          const isWronglyTyped = letter !== inputValue[l_idx]
                          const shouldBeHighlighted = l_idx < inputValue.length
                          return (
                            <span
                              className={`letter ${
                                isCurrentWord && shouldBeHighlighted
                                  ? isWronglyTyped
                                    ? 'text-red-600'
                                    : 'text-green-600'
                                  : ''
                              }`}
                              key={l_idx}
                            >
                              {letter}
                            </span>
                          )
                        })}
                      </span>
                    </>
                  )
                })}
          </div>
          <div id="content" className="mt-4 flex-col justify-between border-t-2 border-gray-600 py-4">
            <ul id="result-details" className="flex-col justify-between">
              <li>
                Timer:{' '}
                <span id="time" className="ml-2 text-lg">
                  {' '}
                  {timer > 0 ? timer : 0}
                </span>
              </li>
              <li>
                Words Per Minute:{' '}
                <span id="WPM" className="ml-2 text-lg">
                  {wpm >= 0 ? wpm : 0}
                </span>
              </li>
            </ul>
            <button
              id="start-button"
              className="rounded border border-white bg-transparent px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-slate-500 hover:text-gray-500"
              onClick={startGame}
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypingTest
