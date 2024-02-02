import logo from '@/assets/images/logo.png'
import { cn } from '@/lib/utils'
import Image, { ImageProps } from 'next/image'
import React from 'react'

export default function Logo({className, ...props} : {className?: string  } | ImageProps) {
  return (
        <Image  
            src={logo}
            alt="Dérik Sehn"
            width={64}
            height={64}
            className={cn(className, "flex-shrink-0 group-hover:animate-pulse drop-shadow-lg")}   
            {...props} 
            />
  )
}
