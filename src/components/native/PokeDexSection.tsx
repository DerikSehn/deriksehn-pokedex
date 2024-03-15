import Pokemons from '@/app/pokemons/page';
import listbgImg from '@/assets/background/pokemonScenario.webp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial';
import Image from 'next/image';
import React from 'react';
import PokeDexCard from './elements/PokeDex';
import PokeProvider from '@/redux/PokeProvider';
import { PokemonTypePlaceholders } from '@/lib/globals';
import ScrollDown from './ScrollDown';



function PokeDexSection() {
  const ref = React.useRef(null)


  /* horizontal scrolling on ref */

  useGSAP(
    (context) => {
      const horizontalSections = gsap.utils.toArray("#PokeDexSection > section");
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#PokeDexSection",
          start: "bottom bottom",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector("#PokeDexSection")
            //@ts-ignore
            ?.offsetWidth
        }
      });
      gsap.fromTo('#slide2', {
        borderTopLeftRadius: '30%',
        borderBottomLeftRadius: '30%',

      }, {
        borderTopLeftRadius: '0%',
        borderBottomLeftRadius: '0%',
        ease: 'linear',
        scrollTrigger: {
          trigger: "#slide2",
          start: "right right",
          end: "right left",
          scrub: 1,
        }
      })
      gsap.to('.pokemons-section', {
        y: 'random(100, -100)',
        x: 'random(20, -20)',
        repeat: -1,
        translateX: -10,
        yoyo: true,
        ease: 'circle',
        duration: 2.2,
      });
    },
    [ref]
  );



  return (
    <div className="z-0 section relative  grid grid-cols-2 w-[200vw] " id='PokeDexSection'>
      <section id='slide1' className="relative z-2 section w-screen h-screen flex flex-col items-center z-2 ">
        {/* Ao apontar para um pokemon na lista, aparecer */}
        <PokeDexCard id="pokedex-card">
          <h2 className='p-4 text-3xl text-center col-span-12 flex items-center flex-col text-naples_yellow-400 bg-rich_black-600 font-mont'>
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
        <Image
          id="hero-image-squirtle"
          className="pokemons-section absolute z-1 left-32 bottom-10"
          src={PokemonTypePlaceholders.fire} alt="logo"
          height={100}
          width={100}
          objectFit="cover"

        />
        <Image
          id="hero-image-squirtle"
          className="pokemons-section absolute z-1 left-24 bottom-60"
          src={PokemonTypePlaceholders.electric} alt="logo"
          height={200}
          width={200}
          objectFit="cover"

        />
        <Image
          id="hero-image-squirtle"
          className="pokemons-section absolute z-1 right-0 bottom-32"
          src={PokemonTypePlaceholders.fighting} alt="logo"
          height={200}
          width={200}
          objectFit="cover"

        />
        <Image
          id="hero-image-squirtle"
          className="pokemons-section absolute z-0 left-32 top-20"
          src={PokemonTypePlaceholders.bug} alt="logo"
          height={200}
          width={200}
          objectFit="cover"

        />
        <Image
          id="hero-image-squirtle"
          className="pokemons-section absolute z-0 left-2 bottom-10"
          src={PokemonTypePlaceholders.ghost} alt="logo"
          height={100}
          width={100}
          objectFit="cover"

        />
      </section>

      <section id='slide2' className="section z-1 pt-32 2xl:pt-32  w-screen h-screen  bg-finn-100 ">
        <div className='absolute w-full h-full top-0'>
          <Image
            id="slide2-image-background"
            className="z-1 w-full h-full object-cover brightness-50"
            src={listbgImg} alt="logo"
            layout="fill"
            objectFit="cover"
          />
          <div className='absolute w-full h-full bg-gradient-to-b from-rich_black-100/0  via-ebony-100 to-rich_black-600 z-2' />
        </div>
        <div className='flex text-6xl font-pokemon-solid justify-center h-full items-center text-naples_yellow-400 shadow-rich_black-700 drop-shadow-2xl'>
          PokéDex
        </div>
        <div className='flex text-6xl font-pokemon-solid justify-center h-full items-center text-naples_yellow-400 shadow-rich_black-700 drop-shadow-2xl'>
          <ScrollDown />
        </div>
      </section>

    </div>
  )
}

export default PokeDexSection