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

import { setRefID } from '@/app/_redux/Reducers/refIDSlice'
import { RootState } from '@/app/_redux/store'
import { useDispatch, useSelector } from 'react-redux'

import Typewriter from './Typewriter'
import { setDialogObject } from '@/app/_redux/Reducers/dialogSlice'

const Dialog = () => {
  const backendURL = 'https://storyboard-backend.vercel.app'

  const refID = useSelector((state: RootState) => state.refID.value)
  const {Characters, Text, Speaker, BackgroundImage, NextDecisionRefID, NextDialogRefID} = useSelector((state: RootState) => state.dialog)
  const dispatch = useDispatch()

  /* Get the prompt of what we want the user to type here from MongoDB here */
  const GetDialog = async (dialogID: string) => {
    try {
      const dialogObject = await (await fetch(backendURL + '/dialog/' + dialogID)).json()
      dispatch(setDialogObject(dialogObject))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    GetDialog(refID)
  }, [])

  const characterbrightness = (Character: string) => {
    return (Character === Speaker) ? 'brightness-100' : 'brightness-25'
  }

  return (
    <>
      <div
        className='-z-50 flex min-h-screen w-full flex-col'
        style={{
          backgroundImage: BackgroundImage ? `url(/${BackgroundImage}.png)` : `none`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div
        className='fixed bottom-40 left-1/2 flex w-3/4  -translate-x-1/2 transform content-center items-center justify-center'
        onClick={() => NextDecisionRefID ? dispatch(setRefID(NextDecisionRefID)) : GetDialog(NextDialogRefID)}
        role='button'
      >
        {Characters?.Position1 &&  <img className={`h-auto w-1/5 rounded-lg -scale-x-100 shadow-xl ${characterbrightness(Characters?.Position1)}`} src={`/${Characters?.Position1}.png`} alt='person 1' />}
        {Characters?.Position2 &&  <img className={`h-auto w-1/5 rounded-lg -scale-x-100 shadow-xl ${characterbrightness(Characters?.Position2)}`} src={`/${Characters?.Position2}.png`} alt='person 2' />}
        <div className='w-1/5' />
        {Characters?.Position3 &&  <img className={`h-auto w-1/5 rounded-lg -scale-x-100 shadow-xl ${characterbrightness(Characters?.Position3)}`} src={`/${Characters?.Position3}.png`} alt='person 3' />}
        {Characters?.Position4 &&  <img className={`h-auto w-1/5 rounded-lg -scale-x-100 shadow-xl ${characterbrightness(Characters?.Position4)}`} src={`/${Characters?.Position4}.png`} alt='person 4' />}
        {/* The dialog text */}
        <div className='fixed -bottom-32 z-50 w-full'>
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800'>
            <h5 className='mb-2 text-2xl font-bold text-gray-900 dark:text-white'>{Speaker}</h5>
            {/* <Typewriter
              className='flex font-normal text-gray-700 dark:text-gray-400'
              text={Text}
              delay={20}
            ></Typewriter> */}
            <div className='flex font-normal text-gray-700 dark:text-gray-400'>{Text}</div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Dialog
