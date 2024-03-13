import SearchInput from '@/components/native/util/SearchInput';
import { Pokemon, getPokemons, pokemonsSelector } from '@/redux/slices/pokemonSlice';
import { speciesSelector } from '@/redux/slices/speciesSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



export default function Filters() {
  
  const species = useSelector(speciesSelector);  
  // const types = useSelector(typesSelector);  
  const dispatch = useDispatch();



  console.log(species)

  return (
     <div className='flex flex-col z-[3] col-span-12 lg:pt-[20dvh] space-y-16'>
        <div className='flex text-6xl font-pokemon-solid justify-center text-naples_yellow-400 shadow-rich_black-700 drop-shadow-2xl'>
          PokéDex 
        </div>
        <div className='flex  justify-center'>
          <SearchInput onClick={() => dispatch(getPokemons() as any) }/>
        </div> 
        </div>
  )
}
