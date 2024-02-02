import Image from 'next/image'
import React from 'react'
import MouseArrow from './MouseArrow'
import { TypeAnimation } from 'react-type-animation';
import Logo from './Logo';

function Hero() {
  return (
    <div id="hero" className="flex flex-col relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] justify-between items-center pt-24 text-center">
      <div className='flex flex-col items-center justify-between h-[400px] text-6xl'>
        <h1 className='font-light '>
           Greetings, Traveler!
        </h1>
        <br/>
        <h1 className='max-w-screen-lg h-96 line-clamp-3 font-light drop-shadow text-4xl '>
       
       Here... take a little tour through my portfolio.
          
        </h1>
      </div> 
      <MouseArrow/>
    
      <button  
      className='group transition-all bg-raisin_black-300  text-cool_gray-400 p-5 font-light  rounded-full'>
      <span className="material-icons transition-all duration-300">
        arrow_downward
        </span>
      </button>
   
     </div>
  )
}


export default Hero