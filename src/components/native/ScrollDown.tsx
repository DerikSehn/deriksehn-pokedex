import React from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
/* trigger */
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


/* Scroll down with animated midButton  bouncing to top infinitely */
export default function ScrollDown() {

  useGSAP(() => {
    gsap.to('#scroll-down-animated-icon-midButton', {
      duration: .5,
      translateY: '-100%',
      repeat: 12,
      yoyo: true,
      repeatDelay: 1,
      ease: 'power1.inOut',
      stagger: 1,
    })
    gsap.to('#scroll-down-animated-icon', {
      duration: 1,
      repeat: 6,
      yoyo: true,
      ease: 'ease-in-out',
      stagger: 1,
    })
    gsap.fromTo('#scroll-down-animated-icon-midButton', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
    })
    gsap.fromTo('#scroll-down-animated-icon', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
    })
    /* scrolltrigger slide up */
    gsap.fromTo('#scroll-down-animated-icon', {
      y: 0,
    }, {
      y: '-100%',
      scale: 2,
      duration: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
      }
    })
  }, []);

  return (
    <div id='scroll-down-animated-icon' className='relative h-20 w-12 rounded-3xl border-4 border-naples_yellow-300'>
      <div id='scroll-down-animated-icon-midButton' className='absolute top-1/2 left-1/2 -translate-x-1/2  h-5 w-1 rounded-3xl bg-naples_yellow-400 border-naples_yellow-300'></div>
    </div>
  )
}
