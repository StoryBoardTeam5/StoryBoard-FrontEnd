/*
File name     : src/app/register/page.tsx
Description   : Register page for StoryBoard
LastEditBy    : Andres Lopez-Bormann
CreatedDate   : 2023-10-22
Revisions  :
  2023-11-03 - Add Comments
Preconditions: N/A
Postconditions: Register page is rendered
*/
'use client';
import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Play from '../play/page';


// Register Component Here (TODO: Turn into modal)
// use this if we get multiple pictures
//https://codesandbox.io/p/sandbox/shadcn-carousell-fgc77w 

const ClickToPlay = () => {
  // Generate random image URLs
  const getRandomImageUrl = () => {
    const randomImageWidth = Math.floor(Math.random() * 800) + 400; // Random width between 400 and 1200
    const randomImageHeight = Math.floor(Math.random() * 800) + 400; // Random height between 400 and 1200
    return `https://via.placeholder.com/${randomImageWidth}x${randomImageHeight}`;
  };

  const handleClick = (event: any) => {
    // 👇️ refers to the image element
    console.log("Going to Dialog");
   <Play/> // supposed to go to the play page but... it doesn't work rn 
  };
  return (
    <div className='min-h-screen flex content-center items-center justify-center'>
    <Carousel className="lg:max-w-screen lg:max-h-screen m-32">
      <CarouselContent className='m-12'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className='place-items-center'>
            <div className="flex p-1 justify-center">
              <Card className='w-3/4'>
                <CardContent className="flex-col aspect-[4/3] place-items-center justify-center p-12">
                <div className='flex place-items-center justify-center'>
                    <h1 className='m-auto text-2xl'>Game {index}</h1>
                  </div>
                  <div className='flex place-items-center justify-center object-cover aspect-[4/3]'>
                  <img
                    src={getRandomImageUrl()}
                    alt={`Random Image ${index + 1}`}
                    className="w-3/4 h-3/4 object-cover"
                    onClick={handleClick}
                  />
                  </div>
                  
                  <div className='flex place-items-center justify-center'>
                    <h1 className='m-auto text-2l'>Description {index}</h1>
                  </div>
              
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
    </div>
  );
}

export default ClickToPlay
