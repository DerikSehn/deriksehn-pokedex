import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap-trial'
import SearchInput from './util/SearchInput';
import PokeDexCard from './elements/PokeDex';




function List() {
  const ref = React.useRef(null)


  /* horizontal scrolling on ref */

  useGSAP(
    (context) => {
      const horizontalSections = gsap.utils.toArray("#List > section");
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#List",
          start: "bottom bottom",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector("#List")
            ?.offsetWidth
        }
      });
      gsap.fromTo('#pokedex-card', {
        y: -200,
        scale: 0,
        opacity: 0,
        borderRadius: '30%'
      }, {
        y: 0,
        scale: .8,
        opacity: 1,
        borderRadius: '3%',

        ease: 'ease-in-out',
        scrollTrigger: {
          trigger: "#hero",
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
        }
      })
    },
    [ref]
  );



  return (
    <div className="section  grid grid-cols-2  w-[200dvw]" id='List'>
      <section id='slide1' className="section w-screen pt-32  lg:px-20  grid lg:grid-cols-12 grid-cols-1  content-start ">
        <PokeDexCard id="pokedex-card">
          <div>

          </div>
        </PokeDexCard>
      </section>

      <section id='slide2' className="section bg-naples_yellow-400 w-screen pt-40 lg:px-20   grid lg:grid-cols-3 grid-cols-1 content-start">
        <div className='w-full flex flex-col justify-center space-y-2'>
          <h1 className="text-6xl font-bold text-naples_yellow-400">PokeDex</h1>
          <SearchInput />
        </div>
      </section>
    </div>
  )
}

export default List