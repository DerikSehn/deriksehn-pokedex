import Image from 'next/image'
import React from 'react'


type PokemonIconProps = {
  alt: string;
  src: string;
  height?: number;
  width?: number;
};


export default function PokemonIcon({ src, alt, height = 50, width = 50 }: PokemonIconProps) {
  return (
    <Image src={src} alt={alt} width={width} height={height} />

  )
}
