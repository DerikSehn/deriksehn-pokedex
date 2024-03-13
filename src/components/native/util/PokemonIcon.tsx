import Image from 'next/image'
import React from 'react'


type PokemonIconProps = {
  alt: string;
  src: string;
};


export default function PokemonIcon({ src, alt} : PokemonIconProps) {
  return (
    <Image src={src} alt={alt} width={50} height={50} />

  )
}
