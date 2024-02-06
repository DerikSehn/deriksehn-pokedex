import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap-trial'

function Skills() {
  const ref = React.useRef(null)

  
  return (
   <div ref={ref} className="section flex flex-col " id='skills'>
     <div id='slide1' className="section relative h-full w-screen mt-10 sm:mt-28 text-center ">
      Slide 1
      </div>
      <div id='slide1' className="section relative h-full w-screen mt-10 sm:mt-28 text-center ">
      Slide 1
      </div>
</div>
  )
}

export default Skills