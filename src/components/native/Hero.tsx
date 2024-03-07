import Image from 'next/image'
import React from 'react'
import MouseArrow from './MouseArrow'
import { TypeAnimation } from 'react-type-animation';
import Logo from './Logo';
 import gsap from 'gsap-trial';
import { useGSAP } from '@gsap/react';
import ScrollDown from './ScrollDown';
import heroImg from '@/assets/images/hero-image-landing-page.png'
import bgImg from '@/assets/images/logo.png'
import profileImg from '@/assets/images/derik/animated-profile.png'
import PokeLogo from './Logo';

const images = [
  profileImg,

]

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
    })
    /* disappear on scrolltrigger */
    gsap.from('#arrow-down', {
      duration: 1,
      opacity: 0,
      ease: 'ease-in',
    })
    /* image changes each 5 seconds */
/*     for (let index = 0; index < 5; index++) {
        setImage(images[index])      
    } */
  }, []);

  return (
    <div id="hero" className=" flex flex-col h-screen min-h-[600px] relative justify-between z-1 items-center pt-24 text-center">
      {/* bgImg */}
     
      <section className='container grid grid-cols-2'>

        <div className='col-span-1 justify-center z-10'>
        {/* rounded image */}
          <Image 
            className="rounded-full object-cover shadow-raisin_black-500  drop-shadow-2xl z-2"  
            object-fit="cover" 
            src={profileImg} alt="logo"/> 
        </div>  

        <div className='flex col-span-1 text-right h-full pt-28 justify-self-end '>
          <h1 className='hero-text  fil tracking-tighter text-[white]/40 text-4xl' >
            <section className='space-x-3 flex flex-col '>

              <span>
                  Descubra o real poder dos pokemons.  
                </span>              
              <span className='text-raisin_black-800 text-7xl tracking-wider'>
              <TypeAnimation
              preRenderFirstString
                sequence={[
                 
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

        <div className='hero-text grid col-span-2 mt-32 content-center justify-items-center'>
          <ScrollDown/>
          <p className=' text-raisin_black-900 text-xl' > 
            scroll down
          </p>
        </div>
       
        </section> 
      </div>
  )
}


export default Hero