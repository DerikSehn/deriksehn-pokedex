import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";

function Blob1() {
    const blob1 = useRef(null);

    useGSAP(
        (context) => {
            gsap.to(blob1.current, {
                duration: 1,
                x: 100,
                y: 100,
                ease: "ease-in",
                scrollTrigger: {
                    trigger: blob1.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });
        },
        [blob1]
    );


    return (
        <svg id={"blob1"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
            <path
                fill="#294c39"
                d="M440.5 299q3.5 59-55.5 74.5t-102 41q-43 25.5-100.5 25t-79-54Q82 332 75 286t9.5-86q16.5-40 36.5-86t69.5-62q49.5-16 93 11t73.5 59.5q30 32.5 55 75T440.5 299z"
            ></path>
        </svg>
    );
}

export default Blob1;
