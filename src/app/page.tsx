"use client";
import Footer from "@/components/native/Footer";
import Hero from "@/components/native/Hero";
import PokeDexSection from "@/components/native/PokeDexSection";
import PokeProvider from "@/redux/PokeProvider";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import Pokemons from "./pokemons/Pokemons";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {


  return (
    <html lang="en cursor-none" >
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </head>
      {/*     
    !!! Disabled because this alternative to GSAP's ScrollSmoother does not work unless you pay a unfair amount of money for their license. !!!
    <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              tablet: {
                smooth: true
              },
              smartphone: {
                smooth: true
              }
            }
          }> */}

      <body /* data-scroll-container */ className={`min-h-screen text-white bg-gradient-to-b from-rich_black-900/30  to-rich_black-900/5 text-cool_gray-900 font-bold text-4xl   `} >
        {/* <MouseArrow/> */}
        {/*  <Header /> */}
        <div id="smooth-content" className="relative h-[2000vh] z-10 overflow-x-hidden"  >

          <Hero />
          <PokeDexSection />
          <PokeProvider>
            <Pokemons />
          </PokeProvider>
          <Footer />
        </div>
      </body>
      {/*   </LocomotiveScrollProvider>
 */}
    </html>

  )
}
