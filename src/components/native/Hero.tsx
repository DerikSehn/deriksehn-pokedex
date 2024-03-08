import Image from 'next/image'
import React from 'react'
import MouseArrow from './MouseArrow'
import { TypeAnimation } from 'react-type-animation';
import Logo from './Logo';
import gsap from 'gsap-trial';
import { useGSAP } from '@gsap/react';
import ScrollDown from './ScrollDown';
 import heroBg from '@/assets/images/ui/hero-versotech.webp'

 import charizard from '@/assets/images/charizard.png'
import PokeLogo from './Logo';
import { SearchParamsContext } from '../../../node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime';
import SearchInput from './util/SearchInput';

function Hero() {

  useGSAP(() => {
    gsap.timeline()
      .from('.hero-text', {
        duration: 1,
        y: "random(-100, 100)",
        opacity: 0,
        delay: .2,
        ease: 'ease-in',
        stagger: .5
      }).fromTo('#charizard-hero-image', {
        opacity:0,
        y: -10,
        x: -10,
        rotateY: 170,
        rotate: 0
    }, {
      y: 100, opacity:1,
      x: 50, 
      rotate: 0,
      duration: 1.4,
      delay: .5,
      ease: 'ease-in-out',  
      rotateY: 180, 
    });
    /* disappear on scrolltrigger */
    gsap.from('#arrow-down', {
      duration: 1,
      opacity: 0,
      ease: 'ease-in',
    })
    
    gsap.to('#charizard-hero-image', {
        y: -20,
        x: 0,
        repeat: -1,
        translateX: -10,
        yoyo: true, 
        filter: 'drop-shadow(0 0 2rem #ff0000)',
        ease: 'circle',
        duration: 2.2,
      });
    /* scrollTrigger for charizard-hero-image */
   /*  gsap.fromTo('#charizard-hero-image',{
      y: '0%',
      x: '0%',
    }, {
      y: '-20%',
      x: '100%',
      scale: 5,
      opacity: 0, 
      ease: 'ease-in-out',           
      filter: 'drop-shadow(0 0 0rem #ff0000)',
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
      }
    })    */
    

  }, []);

  return (
    <div id="hero"
     style={{
      backgroundImage: `url(${charizard})`,
     }}

    className="flex flex-col bg-gradient-to-b  h-screen min-h-[600px] lg:rounded-b-[50%] md:rounded-b-[20%] overflow-hidden relative justify-between z-1 items-center pt-24 text-center">
      {/* bgImg */}

      <section className='container grid grid-cols-2'>

        <div id='charizard-hero-div' 
       
        className='col-span-1 justify-center z-10  pt-4 md:p-20 '
       
         >
          {/* rounded image */}
          <Image
            id="charizard-hero-image"
            className="rounded-full object-cover shadow-raisin_black-500   drop-shadow-2xl z-2"
            object-fit="cover"
            style={{
           filter: 'drop-shadow(0 0 0rem #ff0000)',
            }}
            src={charizard} alt="logo" />
        </div>

        <div className='flex col-span-1 text-right h-full pt-40 justify-self-end '>
          <h1 className='hero-text  flex flex-col tracking-tighter text-[white]/60 text-4xl' >
            <section className='space-x-3 flex flex-col '>
              <span className='text-4xl '>
                Discover the real power of <h1 className='text-naples_yellow-400 text-9xl font-moglan'>Pokemon!</h1>
              </span>
              <span className='text-coquelicot-700 text-6xl tracking-wider'>
                <TypeAnimation
                  preRenderFirstString
                  sequence={[
                    2000,
                    '',
                    2000,
                    'Bulbasaur',
                    2000,
                    'Ivysaur',
                    2000,
                    'Venusaur',
                    2000,
                    'Charmander',
                    2000,
                    'Charmeleon',
                    2000,
                    'Charizard',
                    2000,
                    'Squirtle',
                    2000,
                    'Wartortle',
                    2000,
                  ]}
                  speed={20}
                  deletionSpeed={20}

                  repeat={Infinity}
                />

              </span>
             
             
            </section>
          </h1>
        </div>


      </section>
    </div>
  )
}


export default Hero