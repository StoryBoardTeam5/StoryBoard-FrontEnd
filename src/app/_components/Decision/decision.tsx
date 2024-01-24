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

const Decision = () => {
  useEffect(() => {
    window.scrollTo({
      top: 1000, // Change this value to control the scroll distance
      behavior: 'smooth', // This adds smooth scrolling animation
    });
  }, []);


  return (
    <div>
      <div
        className='min-h-screen -z-50'
        style={{
          backgroundImage: 'url(/cafe.png)',
        }}
      />
      <div className='fixed bottom-32 left-1/2 transform -translate-x-1/2  flex w-3/4 content-center items-center justify-center'>
        <div className='m-auto block rounded-lg border border-gray-200 bg-white p-6 opacity-95 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <p className='pt-12 font-normal text-gray-700 dark:text-gray-200'>
            The Barista gives you a choice of Coffee, You can have a latte for $12380.01 or a frap for $23892.1 Which do
            you choose? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna magna, congue quis metus
            quis, dapibus rutrum lorem. Proin accumsan ex nisi, imperdiet mattis metus hendrerit vitae. Phasellus
            porttitor hendrerit eros, a varius lacus sollicitudin eu. In mi nulla, suscipit et nunc vitae, sagittis
            pulvinar nisl. Sed convallis egestas ligula, vitae elementum tellus pharetra non. Curabitur ac ultrices
            nisi, sit amet sodales mauris. In fringilla arcu in aliquet luctus.
          </p>
          <h5 className='m-auto pt-12 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            What do you want to drink?
          </h5>
          <div className='flex flex-row justify-evenly p-16'>
            <button className='m-auto w-1/3 rounded-lg border border-gray-200 bg-white p-6 opacity-95 shadow hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900'>
              Choice 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna magna, congue quis metus
              quis
            </button>
            <button className='m-auto block w-1/3 rounded-lg border border-gray-200 bg-white p-6 opacity-95 shadow hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900'>
              Choice 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna magna, congue quis metus
              quis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Decision
