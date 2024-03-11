import React from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap-trial'


export default function PokeDexCard({ id, children }: any) {

    useGSAP(
        (context) => {
            gsap.timeline()
                .fromTo('#pokedex-card', {
                    scale: .7,
                    x: '0%',
                    y: '0dvh',
                    borderRadius: '30%'
                }, {
                    x: '20%',
                    y: '-15dvh',
                    scale: 1,
                    opacity: 1,
                    borderRadius: '3%',

                    ease: 'power.out',
                    scrollTrigger: {
                        trigger: "#slide2",
                        start: "right right",
                        end: "right left",
                        scrub: 1,
                    }
                }).fromTo('#pokedex-card-child', {
                    height: '5dvh',
                 },
                    {
                         height: '90dvh',

                        scrollTrigger: {
                            trigger: "#slide2",
                            start: "right right",
                            end: "right left",
                            scrub: 1,
                        }
                    }
                )
        },
        []
    );

    return (
        <div id={id} className="scale-50 md:scale-100  lg:scale-100 min-w-[380px] max-w-[1000px] w-8/12 flex flex-col justify-center rounded-3xl ">
            <div className="lg:max-h-60 max-h-32 min-h-32 lg:min-h-60 relative overflow-hidden rounded-t-3xl  w-full bg-gradient-to-tr from-[red]/90 to-[red]/60 shadow-inner">
                {/* circle top middle cut in half horizontal */}
                <div className="lg:min-h-96 min-h-60 lg:w-96 w-60 rounded-full  border-8 bg-ochre-100 border-ochre-900 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">
                </div>
                <div className="lg:min-h-56 min-h-32 lg:w-56 w-32  rounded-full bg-ochre-900 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">
                </div>
                <div className="lg:min-h-52 min-h-32 lg:w-52 w-32 rounded-full bg-moonstone-600 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">
                </div>
            </div>
            <div id="pokedex-card-child" className=" flex flex-col items-center  ">
                <div className='w-[95%] h-full overflow-hidden bg-moonstone-600  shadow-2xl shadow-moonstone-600 rounded flex items-center'>
                    <span className='md:scale-100 overflow-y-auto scale-50 grid grid-cols-12 m-auto min-h-[400px]  my-5 border-4 border-moonstone-500 rounded-xl w-8/12 bg-rich_black-500 h-36'>
                        {children}
                    </span>
                </div>
            </div>
            <div className="lg:max-h-60 max-h-32 min-h-32 lg:min-h-60  overflow-hidden relative rounded-b-3xl  w-full bg-gradient-to-br  from-[red]/90 to-[red]/60 shadow-inner">
                <div className="lg:min-h-96 min-h-60 lg:w-96 w-60 rounded-full  border-8 bg-ochre-100 border-ochre-900 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                </div>
                <div className="lg:min-h-56 min-h-32 lg:w-56 w-32 rounded-full bg-ochre-900 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                </div>
                <div className="lg:min-h-52 min-h-32 lg:w-52 w-32 rounded-full bg-moonstone-600 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                </div>
            </div>
        </div>
    )
}