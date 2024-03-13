"use client";
import Contact from "@/components/native/Contact";
import Footer from "@/components/native/Footer";
import Header from "@/components/native/Header";
import Hero from "@/components/native/Hero";
import ImageSequence from "@/components/native/ImageSequence";
import MouseArrow from "@/components/native/MouseArrow";
import Projects from "@/components/native/Projects";
import List from "@/components/native/List";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useRef } from "react";
import React from "react"; 
import PokeProvider from "@/redux/PokeProvider";
import Pokemons from "./pokemons/page";


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {

  const smoother = useRef();

  useGSAP(
    (context) => {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,

      });

    },
    [smoother]
  );


  return (
    <html lang="en cursor-none" >
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </head>
    
      <body ref={smoother} className={`min-h-screen text-white bg-gradient-to-b from-rich_black-900/30  to-rich_black-900/5 text-cool_gray-900 font-bold text-4xl   `} >
        {/* <MouseArrow/> */}
        <Header />
        <div id="smooth-content" className="relative h-[2000vh] z-10"  >
          
          <Hero />
          <List />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </body>
    </html>

  )
}
