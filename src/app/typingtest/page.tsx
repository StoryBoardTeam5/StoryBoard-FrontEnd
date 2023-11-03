/*
File name     : src/app/typingtest/page.tsx
Description   : Layout of the application includes MetaData, font, Navbar, and children
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-10-02
Revisions  :
  2023-10-22 - Add Typing Test Functionality
  2023-11-03 - Add Comments
Preconditions: - Typingtest will receive a prompt and a challenge
Postconditions:
  - Typing Test is rendered
  - Typing Test will return WPM, Accuracy, and Time
*/

'use client'

import React, { useEffect, useState } from 'react'

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
  const GetPrompt = (prompt: string) => {
    setPrompt(prompt)
    setUntypedWords(prompt.split(' '))
    setCompletedWords([])
  }

  /* Called at start to make sure the input is always in focus */
  const focusInput = () => {
    const input = document.getElementById('input')
    input?.focus()
  }
  /* StartGame will prepare the input, set the prompt, and set the game to started */
  const startGame = () => {
    setInputValue('')
    focusInput()
    GetPrompt(
      'This is a test prompt This is a test prompt This is a test prompt This is a test prompt This is a test prompt This is a test prompt',
    )
    setStarted(true)
    setCompleted(false)
    setStartTime(Date.now())
  }

  // Handle input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const lastLetter = inputValue[inputValue.length - 1]
    const currentWord = untypedWords[0]
    //A Word has been typed if the last letter is a space or a period
    if (lastLetter === ' ' || lastLetter === '.') {
      // current word has been typed correctly
      if (inputValue.includes(currentWord)) {
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

  // This useEffect will calculate the WPM every second
  useEffect(() => {
    const interval = setInterval(() => {
      started && !completed && timer > 0 ? calculateWPM() : setCompleted(true)
    }, 1000)
    return () => clearInterval(interval)
  }, [started, completed, timeElapsed])

  // WPM calculation that will be called every second
  const calculateWPM = () => {
    const now = Date.now()
    setTimeElapsed((now - startTime) / 1000)
    const wpm = Math.ceil(completedWords.length / (timeElapsed / 60))
    setWpm(wpm)
  }

  const timer = Math.ceil(60 - timeElapsed)

  return (
    <div id="body" className="flex h-screen content-center items-center justify-center bg-gray-900">
      <div
        id="Wrapper"
        className="z-10 aspect-video w-1/2 rounded-lg bg-gray-700 bg-opacity-90 p-8 text-white"
        onClick={focusInput}
      >
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
                    <div key={w_idx + 'word'} className="inline-block">
                      &nbsp;
                      <span
                        key={w_idx + 'anchor'}
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
                                    ? 'text-red-600' // Wrong letter Coloring
                                    : 'text-green-600' // Correct letter Coloring
                                  : ''
                              }`}
                              key={l_idx}
                            >
                              {letter}
                            </span>
                          )
                        })}
                      </span>
                    </div>
                  )
                })}
          </div>
          <div id="content" className="mt-4 flex-col justify-between border-t-2 border-gray-600 py-4">
            <ul id="result-details" className="flex-col justify-between">
              <li>
                Timer:{' '}
                <span id="time" className="ml-2 text-lg">
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
