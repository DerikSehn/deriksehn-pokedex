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
      gsap.fromTo('#slide2', {
        borderRadius: '50%'
      }, {

        borderRadius: '0%',

        ease: 'linear',
        scrollTrigger: {
          trigger: "#slide2",
          start: "right right",
          end: "right left",
          scrub: 1,
        }
      })

    },
    [ref]
  );



  return (
    <div className="z-0 section relative  grid grid-cols-2  w-[200dvw]" id='List'>
      <section id='slide1' className="relative z-2 section w-screen flex flex-col items-center z-2 ">
        <PokeDexCard id="pokedex-card">
          <h2 className='p-4 text-2xl text-center col-span-12 flex items-center flex-col text-naples_yellow-400 bg-rich_black-600 font-mont'>
            <span className='flex'>
              The
              <div className='font-pokemon-solid px-2'>
                Pokédex
              </div>
            </span>
            is an invaluable tool to Trainers in the
            <div className='font-pokemon-solid px-2 text-3xl'>
              Pokémon world
            </div>
          </h2 >
          <p className='p-4 text-xl col-span-12  text-rich_black-700 bg-naples_yellow-400 drop-shadow-xl'>
            It gives information about all Pokémon in the world that are contained in its database,
            although it differs in how it acquires and presents information over the different media.
            However, they are also only given to a few Trainers at a time, generally to the ones that
            are felt to have exceptional potential and skill.
          </p >

        </PokeDexCard>
      </section>

      <section id='slide2' className="section z-1  w-screen h-screen   bg-naples_yellow-400  grid lg:grid-cols-12 grid-cols-1 content-start">
        <div id="slide-2-filters" className='fixed w-full col-span-3 p-4 pt-28 flex flex-col justify-center space-y-2'>
          <h1 className="text-6xl font-bold text-rich_black-700">PokeDex</h1>
          <SearchInput />
        </div>
      </section>
    </div>
  )
}

export default List