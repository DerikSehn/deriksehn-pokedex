import Image from 'next/image'
import React from 'react'
import MouseArrow from './MouseArrow'
import { TypeAnimation } from 'react-type-animation';
import Logo from './Logo';
 import gsap from 'gsap-trial';
import { useGSAP } from '@gsap/react';

function Hero() {

  useGSAP(() => {
    gsap.timeline()
    .from('.hero-text', {
      duration: 1,
      y: "random(-100, 100)",
      opacity: 0,
      delay: .2,
      ease: 'ease-in',
      stagger: 1
    })
    /* disappear on scrolltrigger */
    gsap.from('#arrow-down', {
      duration: 1,
      opacity: 0,
      delay: 3,
      ease: 'ease-in',
    })
    
  }, []);

  return (
    <div id="hero" className=" flex flex-col relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] justify-between items-center pt-24 text-center">
      <div className='flex flex-col items-center justify-between h-[400px] text-6xl'>
        <h1 className='font-light hero-text'>
           Greetings, Traveler!
        </h1>
        <br/>
        <h1 className='max-w-screen-lg h-96 text-raisin_black-700 line-clamp-3 drop-shadow text-4xl font-bold hero-text'>
           Here... take a little tour through my portfolio.
        </h1>
      </div> 
      <div  id='arrow-down'
      className='group flex flex-col text-3xl items-center justify-center bg-raisin_black-300  text-cool_gray-400 p-5 font-light  rounded-full gap-10'>
        <span  >
          scroll down and enjoy the show!
          </span>
      <span  className="material-icons transition-all duration-300 scale-[2.5] group-hover:scale-[3.5] p-5">
        arrow_downward
        </span>
      </div>
   
     </div>
  )
}


export default Hero