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

import TypingTest from '@/components/TypingTest/PreTestMenu'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../_redux/store'
import Decision from '../../components/Decision/decision'
import Dialog from '../../components/Dialog/dialog'
import { setRefID } from '../_redux/Reducers/refIDSlice'
import { GetUserProgress } from '@/actions/GetUserProgress'

const Play = () => {
  const currentMode = useSelector((state: RootState) => state.currentMode.value)
  const dispatch = useDispatch()

  useEffect(() => {
    GetUserProgress().then((progress) => {
      console.log('Progress:', progress)
      dispatch(setRefID(progress))
    })
  }, [])


  return (
    <>
      {currentMode === 'Dialog' ? (
        <Dialog />
      ) : currentMode === 'Decision' ? (
        <Decision />
      ) : currentMode === 'TypingTest' ? (
        <TypingTest />
      ) : null}
    </>
  )
}
export default Play
