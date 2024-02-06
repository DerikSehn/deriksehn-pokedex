"use client";
import Contact from "@/components/native/Contact";
import Footer from "@/components/native/Footer";
import Hero from "@/components/native/Hero";
import ImageSequence from "@/components/native/ImageSequence";
import MouseArrow from "@/components/native/MouseArrow";
import Projects from "@/components/native/Projects";
import Skills from "@/components/native/Skills";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useRef } from "react";


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {

  const smoother = useRef();
 
  useGSAP(
    (context) => {
      let sections = gsap.utils.toArray("#smooth-content > div");
      console.log(sections.length)
 
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
 
    },
    [smoother]
  );


  const scrollyVideo = useRef();


  return (    
    <html lang="en cursor-none" > 
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
             rel="stylesheet"/>
      </head>
         <body ref={smoother} className={`min-h-screen text-white bg-charcoal-100 text-cool_gray-900 font-bold text-4xl  `} >
             <MouseArrow/>
             <ImageSequence/>
        {/*     <div id="smooth-content" className="relative h-[4000px]"  >  
              <Hero />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </div> */}
       </body>
      </html>

  )
}
