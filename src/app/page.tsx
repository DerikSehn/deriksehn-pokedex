"use client";
import Contact from "@/components/native/Contact";
import Footer from "@/components/native/Footer";
import Header from "@/components/native/Header";
import Hero from "@/components/native/Hero";
import HorizontalScroll from "@/components/native/HorizontalScroll";
import Projects from "@/components/native/Projects";
import Skills from "@/components/native/Skills";
import { UserButton } from "@clerk/nextjs";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import backgroundImage from '@/assets/images/hero-image-landing-page.png'
import Image from "next/image";
 import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {

  /* ref */
  const lenis = useLenis()

  /* gsap */
  const main = useRef();
  const smoother = useRef();
 
  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
     
    },
    [smoother]
  );


  return (    

    <html lang="en cursor-none" > 
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
             rel="stylesheet"/>
      </head>
           <body className={`min-h-screen text-white bg-charcoal-100 text-cool_gray-900 font-bold text-4xl  `} >
          <div ref={main} >
            <div id="smooth-content" className="section relative h-[4000px]"  >  
              <Image 
                quality={100}
                className="absolute w-full brightness-50 -mt-24"
                src={backgroundImage}
                alt="hero background"  
                data-speed=".2" />   
              
              <Hero />
              <Skills />
              <Projects />
            
              <Contact />
              <Footer />
            
            </div>
          </div>
       </body>
      </html>

  )
}
