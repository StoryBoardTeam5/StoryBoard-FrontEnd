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

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../_redux/store'
import { setRefID } from '@/app/_redux/refIDSlice'


const Decision = () => {
  const [question, setQuestion] = useState('')
  const [choice1, setChoice1] = useState({ option: '', TestRefID: '' })
  const [choice2, setChoice2] = useState({ option: '', TestRefID: '' })
  const refID = useSelector((state: RootState) => state.refID.value)
  const dispatch = useDispatch()

  const backendURL = 'https://storyboard-backend.vercel.app'

  useEffect(() => {
    window.scrollTo({
      top: 1000, // Change this value to control the scroll distance
      behavior: 'smooth', // This adds smooth scrolling animation
    })

    setTimeout(() => {
      GetDecision(refID)
    }, 1000)
  }, [])

  /* Get the prompt of what we want the user to type here from MongoDB here */
  const GetDecision = async ( decisionID: string) => {
    try {
      const data = await (await fetch(backendURL + '/decision/' + decisionID)).json()
      setQuestion(data?.Question)
      setChoice1(data?.ChoiceOne)
      setChoice2(data?.ChoiceTwo)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div
        className='-z-50 min-h-screen'
        style={{
          backgroundImage: 'url(/cafe.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        }}
      />
      <div className='fixed bottom-32 left-1/2 flex w-3/4  -translate-x-1/2 transform content-center items-center justify-center'>
        <div className='m-auto block rounded-lg border border-gray-200 bg-white p-6 opacity-95 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          {!question ? (
            'Loading...'
          ) : (
            <div>
              <p className='pt-12 font-normal text-gray-700 dark:text-gray-200'>{question}</p>
              <h5 className='m-auto pt-12 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                What do you choose?
              </h5>
              <div className='flex flex-row justify-evenly p-16'>
                <button onClick={()=>dispatch(setRefID(choice1.TestRefID))} className='m-auto w-1/3 rounded-lg border border-gray-200 bg-white p-6 opacity-95 shadow hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900'>
                  {choice1?.option}
                </button>
                <button onClick={()=>dispatch(setRefID(choice2.TestRefID))} className='m-auto block w-1/3 rounded-lg border border-gray-200 bg-white p-6 opacity-95 shadow hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900'>
                  {choice2?.option}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Decision
