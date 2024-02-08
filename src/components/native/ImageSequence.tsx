import Image from "next/image"
import environment from "@/lib/environment";
import { useEffect, useState } from "react";


export default function ScrollImageSequence(){
    const alt = "image-ex";
    const {apiUrl} = environment

    /* padstart 5 */
    const [imageName, setImageName ] = useState('00001');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const index = Math.floor(scrollTop / 80 + 1);
            console.log(index);
            setImageName(String(index).padStart(5, '0'));
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const src = `${apiUrl}/seq/${imageName}.jpg`

    return <div className="absolute z-0 h-full">
     <Image
        width={1920}
        height={1080}
        data-speed="0.1"
        className="z-0 w-screen object-center "
        src={src} alt={alt}/>
        </div> 
}