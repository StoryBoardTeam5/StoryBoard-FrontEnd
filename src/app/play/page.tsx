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

import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Decision from '../_components/Decision/decision'
import Dialog from '../_components/Dialog/dialog'
import TypingTest from '../_components/TypingTest/typingtest'
import type { RootState } from '../_redux/store'
import { nextMode } from '../_redux/Reducers/gameModeSlice'

const Play = () => {
  const refID = useSelector((state: RootState) => state.refID.value)
  const currentMode = useSelector((state: RootState) => state.currentMode.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(nextMode())
  }, [refID])

  return (
    <div>
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
