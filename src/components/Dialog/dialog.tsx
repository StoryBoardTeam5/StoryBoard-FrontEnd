/*
File name     : src/app/_components/Dialog/Dialog.tsx
Description   : Dialog Modal for StoryBoard
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-11-05
Revisions :
Preconditions: N/A
Postconditions: Dialog page is rendered
*/

import React, { useEffect } from 'react'

import { setBackgroundImage } from '@/app/_redux/Reducers/BackgroundImageSlice'
import { setDialogObject } from '@/app/_redux/Reducers/dialogSlice'
import { setCurrentMode } from '@/app/_redux/Reducers/gameModeSlice'
import { setRefID } from '@/app/_redux/Reducers/refIDSlice'
import { RootState } from '@/app/_redux/store'
import { useDispatch, useSelector } from 'react-redux'

const Dialog = () => {
  const backendURL = 'https://storyboard-backend.vercel.app'

  const refID = useSelector((state: RootState) => state.refID.value)
  const { Characters, Text, Speaker, BackgroundImage, NextDecisionRefID, NextDialogRefID } = useSelector(
    (state: RootState) => state.dialog,
  )
  const dispatch = useDispatch()

  // Called When Dialog is first Rendered, will get the Dialog object from the backend
  useEffect(() => {
    GetDialog(refID)
  }, [])

  /* Get the prompt of what we want the user to type here from MongoDB here */
  const GetDialog = async (dialogID: string) => {
    try {
      const dialogObject = await (await fetch(backendURL + '/dialog/' + dialogID)).json()
      dispatch(setDialogObject(dialogObject))
      dispatch(setBackgroundImage(dialogObject.BackgroundImage))
    } catch (e) {
      console.log(e)
    }
  }

  // Called when the BackgroundImage is updated, will set the background image to the new image
  useEffect(() => {
    dispatch(setBackgroundImage(BackgroundImage))
  }, [BackgroundImage])

  // Switches the game mode to Decision and sets the refID to the decisionID
  const SwitchGameModeToDecision = (decisionID: string) => {
    dispatch(setRefID(decisionID))
    dispatch(setCurrentMode('Decision'))
  }

  // Renders the character image
  const renderCharacter = (Character: string, reverse: boolean) => {
    const characterbrightness = Character === Speaker ? 'brightness-100' : 'brightness-25'
    const scale = reverse ? '-scale-x-100' : ''
    return (
      <img
        className={`h-auto w-1/5 ${scale} rounded-lg shadow-xl ${characterbrightness}`}
        src={`/${Character}.png`}
        alt={Character}
      />
    )
  }

  return (
    <>
      <div
        className='fixed bottom-40 left-1/2 flex w-3/4  -translate-x-1/2 transform content-center items-center justify-center'
        onClick={() => (NextDecisionRefID ? SwitchGameModeToDecision(NextDecisionRefID) : GetDialog(NextDialogRefID))}
        role='button'
      >

        {/* The character images */}
        {Characters?.Position1 && renderCharacter(Characters?.Position1, false)}
        {Characters?.Position2 && renderCharacter(Characters?.Position2, false)}
        <div className='w-1/5' />
        {Characters?.Position3 && renderCharacter(Characters?.Position3, true)}
        {Characters?.Position4 && renderCharacter(Characters?.Position4, true)}

        {/* The dialog text */}
        <div className='fixed -bottom-28 z-50 w-full'>
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800'>
            <h5 className='mb-2 text-2xl font-bold text-gray-900 dark:text-white'>{Speaker}</h5>
            <div className='flex font-normal text-gray-700 dark:text-gray-400'>{Text}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dialog
