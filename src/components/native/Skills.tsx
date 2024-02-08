import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap-trial'

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


function Skills() {
  const ref = React.useRef(null)


  /* horizontal scrolling on ref */

  useGSAP(
    (context) => {
      const horizontalSections = gsap.utils.toArray("#skills > section");
      console.log(horizontalSections.length)
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#skills",
          start: "bottom bottom",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector("#skills")
          ?.offsetWidth
        }
      });
    },
    [ref]
  );


  
  return (
   <div className="section grid grid-cols-2  w-[200dvw]" id='skills'>
     <section id='slide1' className="section w-screen  sm:mt-28 text-center ">
      Slide 1
    </section>
    <section id='slide1' className="section w-screen  sm:mt-28 text-center ">
      Slide 2
    </section>
</div>
  )
}

export default Skills