import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap-trial'
import SearchInput from './util/SearchInput';

/* // ---------- scrollTrigger plugin registration
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // ---------- gsap context
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- selecting all horizontal sections
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      // ---------- applying horizontal scroll animation
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + document.querySelector("#container").offsetWidth
        }
      });
    });

    return () => ctx.revert();
  }, []);


ReactDOM.render(<App />, document.getElementById("root"));
 */


function List() {
  const ref = React.useRef(null)


  /* horizontal scrolling on ref */

  useGSAP(
    (context) => {
      const horizontalSections = gsap.utils.toArray("#List > section");
      console.log(horizontalSections.length)
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
    },
    [ref]
  );



  return (
    <div className="section bg-cool_gray-100  grid grid-cols-2  w-[200dvw]" id='List'>
        <section id='slide1' className="section w-screen pt-40 lg:px-20 sm:mt-28 grid lg:grid-cols-3 grid-cols-1  content-start ">
        <div className='w-full flex flex-col justify-center space-y-2'></div>
        </section>
       
        <section id='slide1' className="section w-screen pt-40 lg:px-20 sm:mt-28 grid lg:grid-cols-3 grid-cols-1 content-start">
          <div className='w-full flex flex-col justify-center space-y-2'>
            <h1 className="text-6xl font-bold text-naples_yellow-400">PokeDex</h1>
            <SearchInput  />
          </div>
        </section>
    </div>
  )
}

export default List