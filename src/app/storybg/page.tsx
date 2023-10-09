'use client';

import React from 'react'
import Button from './Button'
import Link from 'next/link'

const page = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div>
            The Picture
        </div>
      <div className="mx-auto flex h-screen max-w-screen-xl items-end px-2">
        <Button  border="none"
        color="blue"
        height = "100px"
        onClick={() => alert("You clicked on the first choice")}
        width = "600px"
        margin='20px'
        children = "Choice 1"/>
        <Button  border="none"
        color="green"
        height = "100px"
        onClick={() => alert("You clicked on second choice!")}
        width = "600px"
        margin='20px'
        children = "Choice 2"/>
      </div>
    </section>
  )
}

export default page
