/*
File name     : src/app/play/page.tsx
Description   : Game Navigation for StoryBoard - will have 3 modes: Dialog, Decision, and TypingTest
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-11-03
Revisions  :
  2023-11-05 - Creation Date
Preconditions:
Postconditions: Game Navigation is rendered and user can switch between modes
*/
'use client'

import React, { useState } from 'react'

// import { useRouter } from 'next/router'
import Decision from '../_components/Decision/decision'
import Dialog from '../_components/Dialog/dialog'
import TypingTest from '../_components/TypingTest/typingtest'

const Play = () => {

  const [currentMode, setCurrentMode] = useState('Dialog')
  console.log(currentMode)

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
      <div className='m-auto mt-10 flex w-64 justify-between'>
        <button onClick={handleDialog}>Dialog</button>
        <button onClick={handleDecision}>Decision</button>
        <button onClick={handleTypingTest}>TypingTest</button>
      </div>
      {currentMode === 'Dialog' ? (
        <Dialog />
      ) : currentMode === 'Decision' ? (
        <Decision />
      ) : currentMode === 'TypingTest' ? (
        <TypingTest />
      ) : null}
    </div>
  )
}

export default Play
