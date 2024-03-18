/*
File name     : src/app/_components/Decision/decision.tsx
Description   : Decision Modal for StoryBoard
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-11-05
Revisions :
  2024-01-24 - Add Decision HTML and CSS
Preconditions: N/A
Postconditions: Decision page is rendered
*/

'use client'

import React, { useEffect } from 'react'

import { setDecisionObject } from '@/app/_redux/Reducers/decisionSlice'
import { setCurrentMode } from '@/app/_redux/Reducers/gameModeSlice'
import { setRefID } from '@/app/_redux/Reducers/refIDSlice'
import type { RootState } from '@/app/_redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ui/button'

const Decision = () => {
  const backendURL = 'https://storyboard-backend.vercel.app'

  const refID = useSelector((state: RootState) => state.refID.value)
  const { ChoiceOne, ChoiceTwo, Question } = useSelector((state: RootState) => state.decision)
  const dispatch = useDispatch()

  // Called When Decision component is first Rendered, will get the Decision object from the backend
  useEffect(() => {
    GetDecision(refID)
  }, [])

  /* Get the prompt of what we want the user to type here from MongoDB here */
  const GetDecision = async (decisionID: string) => {
    try {
      const data = await (await fetch(backendURL + '/decision/' + decisionID)).json()
      dispatch(setDecisionObject(data))
    } catch (e) {
      console.log(e)
    }
  }

  /* Switches the game mode to TypingTest and sets the refID to the TestRefID */
  const SwitchGameModeToTest = (TestRefID: string) => {
    dispatch(setRefID(TestRefID))
    dispatch(setCurrentMode('TypingTest'))
  }

  return (
    <div>
      <div className='fixed bottom-32 left-1/2 flex w-3/4 -translate-x-1/2 transform content-center items-center justify-center'>
        <div className='w-3/4 block rounded-lg py-16 opacity-95 bg-accent'>
          {!Question ? (
            'Loading...'
          ) : (
            <div>
              <p className='pt-12 text-center text-lg font-normal '>{Question}</p>
              <h5 className='m-auto pt-12 text-center text-2xl font-bold'>
                What do you choose?
              </h5>
              <div className='flex flex-row justify-evenly p-16'>
              <Button size={'xl'}
                  onClick={() => SwitchGameModeToTest(ChoiceOne.TestRefID)}
                  className='w-1/3 rounded-lg opacity-95'
                >
                  {ChoiceOne?.option}
                </Button>
                <Button size={'xl'}
                  onClick={() => SwitchGameModeToTest(ChoiceTwo.TestRefID)}
                  className='w-1/3 rounded-lg opacity-95'
                >
                  {ChoiceTwo?.option}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Decision
