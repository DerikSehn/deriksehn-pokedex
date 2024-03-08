import Image from 'next/image'
import React from 'react'
import backgroundImage from '@/assets/images/hero-image-landing-page.png'


export default function BackgroundImages() {
    return (
        <div data-speed=".2" className='absolute min-w-full h-[1000px]'>
            <Image
                quality={100}
                className="min-w-full  brightness-75 -mt-24"
                src={backgroundImage}
                alt="hero background"

            />
            <Image
                quality={100}
                className="min-w-full  brightness-75 -mt-24 rotate-180 -scale-x-100 blur-sm"

                src={backgroundImage}
                alt="hero background"

            />
        </div>
    )
}
