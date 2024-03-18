/*
File name     : src/app/typingtest/page.tsx
Description   : Layout of the application includes MetaData, font, Navbar, and children
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-10-02
Revisions  :
  2023-10-22 - Add Typing Test Functionality
  2023-11-03 - Add Comments / Turned into a component
Preconditions: - Typingtest will receive a prompt and a challenge
Postconditions:
  - Typing Test is rendered
  - Typing Test will return WPM, Accuracy, and Time
*/

'use client'

import React, { useEffect, useMemo, useState } from 'react'

import { setCurrentMode } from '@/app/_redux/Reducers/gameModeSlice'
import { setRefID } from '@/app/_redux/Reducers/refIDSlice'
import { setTypingTestObject } from '@/app/_redux/Reducers/typingTestSlice'
import { RootState } from '@/app/_redux/store'
import { useDispatch, useSelector } from 'react-redux'

import PreTest from './PreTest'
import TypingTest from './Test'
import PostTest from './PostTest'

const PreTestMenu = () => {
  const backendURL = 'https://storyboard-backend.vercel.app'

  const refID = useSelector((state: RootState) => state.refID.value)
  const { challenge, timer, text, maxpoints, NextDialogRefID } = useSelector((state: RootState) => state.typingTest)
  const dispatch = useDispatch()
  const [typingTestStarted, setTypingTestStarted] = useState(false)
  const [typingTestFinished, setTypingTestFinished] = useState(false)
  /* Called When Typing Test Component is first Rendered, will get the Typing Test object from the backend */
  useEffect(() => {
    GetTypingTest(refID)
  }, [])

  /* Get the prompt of what we want the user to type here from MongoDB here */
  const GetTypingTest = async (dialogID: string) => {
    try {
      const typingTestObject = await (await fetch(backendURL + '/typingtest/' + dialogID)).json()
      dispatch(setTypingTestObject(typingTestObject))
    } catch (e) {
      console.log(e)
    }
  }

  // Switches the game mode to Decision and sets the refID to the decisionID
  const SwitchGameModeToDialog = (dialogID: string) => {
    dispatch(setRefID(dialogID))
    dispatch(setCurrentMode('Dialog'))
  }

  /* This should display the challenge text, on Figma the example is "Get 78% Accuracy and earn $100" */
  const challengeText = useMemo(() => {
    switch (challenge) {
      case 'wpm':
        return `Get 50+ WPM for ${timer} seconds and earn ${maxpoints} points!`
      case 'accuracy':
        return `Get 100% Accuracy and earn ${maxpoints} points!`
      default:
        return `Type the following text as fast as you can for a chance to earn ${maxpoints} points!`
    }
  }, [challenge, timer, maxpoints])

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center'>
      <div className='max-w-[50%] flex-col rounded-lg bg-accent p-8'>
        {typingTestFinished ? (
          <PostTest SwitchGameModeToDialog={SwitchGameModeToDialog} NextDialogRefID={NextDialogRefID} setTypingTestFinished={setTypingTestFinished}/>
        ) : typingTestStarted ? (
          <TypingTest setTypingTestFinished={setTypingTestFinished} />
        ) : (
          <PreTest
            challengeText={challengeText}
            text={text}
            challenge={challenge}
            timer={timer}
            maxpoints={maxpoints}
            NextDialogRefID={NextDialogRefID}
            setTypingTestStarted={setTypingTestStarted}
            SwitchGameModeToDialog={SwitchGameModeToDialog}
          />
        )}
      </div>
    </div>
  )
}

export default PreTestMenu
