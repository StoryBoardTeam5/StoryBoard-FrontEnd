/*
File name     : src/app/_components/Dialog/Dialog.tsx
Description   : Dialog Modal for StoryBoard
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-11-05
Revisions :
Preconditions: N/A
Postconditions: Dialog page is rendered
*/

import React from 'react'
const Dialog = () => {
  return (
    <div className='flex flex-col h-screen-with-nav' style={{ 
      backgroundImage: "url(/cafe.png)" }}>
      {/* <h1 className='m-auto text-8xl'>Dialog</h1> */}
      <div className='flex flex-row justify-between'>

          <img className="h-auto max-w-sm rounded-lg shadow-xl dark:shadow-gray-800" src="/barista.png" alt="image description"></img>
          <img className="h-auto max-w-sm rounded-lg shadow-xl dark:shadow-gray-800" src="/barista.png" alt="image description"></img>
      </div>
      {/* The dialog text */}
      <div className='fixed bottom-0 left-0 z-50 w-full'>
        <div className=" m-auto block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Person's Name</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna magna, congue quis metus quis, dapibus rutrum lorem. Proin accumsan ex nisi, imperdiet mattis metus hendrerit vitae. Phasellus porttitor hendrerit eros, a varius lacus sollicitudin eu. In mi nulla, suscipit et nunc vitae, sagittis pulvinar nisl. Sed convallis egestas ligula, vitae elementum tellus pharetra non. Curabitur ac ultrices nisi, sit amet sodales mauris. In fringilla arcu in aliquet luctus. </p>
        </div>
      </div>   
    </div>
  )
}

export default Dialog
