/*
File name     : src/app/play/page.tsx
Description   : Game Navigation for StoryBoard - will have 3 modes: Dialog, Decision, and TypingTest
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-11-03
Revisions  :
  2023-11-05 - Creation Date
  2023-12-03 - Update get Typing test prompt from DB
Preconditions:
Postconditions: Game Navigation is rendered and user can switch between modes
*/
'use client'

import React, { useEffect, useState } from 'react'

// import { useRouter } from 'next/router'
import Decision from '../_components/Decision/decision'
import Dialog from '../_components/Dialog/dialog'
import TypingTest from '../_components/TypingTest/typingtest'

const Play = () => {
  const [currentMode, setCurrentMode] = useState('Dialog')
  const [promptID, setPromptID] = useState('65b756abf47ca82d44ed9eba')


  useEffect(() => {
    window.scrollTo({
      top: 1000, // Change this value to control the scroll distance
      behavior: 'smooth', // This adds smooth scrolling animation
    })
    if (currentMode === 'Dialog') {
      setCurrentMode('Decision')
    }
        if (currentMode === 'Decision') {
      setCurrentMode('TypingTest')
    }
    if (currentMode === 'TypingTest') {
      setCurrentMode('Dialog')
    }
  }
  , [promptID])


  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPromptID(e.target.value)
  }

  const handleDialog = () => {
    setCurrentMode('Dialog')
  }
  const handleDecision = () => {
    setCurrentMode('Decision')
  }
  const handleTypingTest = () => {
    setCurrentMode('TypingTest')
  }
  return (
    <div className=''>
      {/* Buttons are here to switch between modes, remove later */}
      <div className='m-auto mt-10 flex w-96 justify-between'>
        <button onClick={handleDialog}>Dialog</button>
        <button onClick={handleDecision}>Decision</button>
        <button onClick={handleTypingTest}>TypingTest</button>
      </div>
      <div className='m-auto flex'>
        <span className='m-auto mt-10 flex text-2xl'>{currentMode}</span>
      </div>

      {/* Input is here to switch between prompts, remove later */}
      {currentMode === 'TypingTest' || currentMode === 'Decision'? (
        <div className='m-auto flex w-96'>
          <span className='m-auto mt-10 flex '>prompt ID:</span>
          <input
            className='m-auto mt-10 w-64 '
            type='text'
            autoComplete='off'
            onChange={handlePromptChange}
            value={promptID}
          />
        </div>
      ) : null}

      {currentMode === 'Dialog' ? (
        <Dialog />
      ) : currentMode === 'Decision' ? (
        <Decision setPromptID={setPromptID} decisionID={promptID}/>
      ) : currentMode === 'TypingTest' ? (
        <TypingTest promptID={promptID} />
      ) : null}
    </div>
  )
}

export default Play
