"use client";
import React, { useEffect } from "react"; 
import { useSelector, useStore } from "react-redux"; 
import { getPokemons, pokemonsSelector } from "@/redux/slices/pokemonSlice";
import { cachedPokemonsSelector, getCachedPokemons } from "@/redux/slices/cachedPokemonsSlice";
import InfiniteScroll from "@/components/native/InfiniteScroll";
import { SliceStatus } from "@/lib/globals";
import PokemonForm from "./PokemonForm";
import PokemonSkeleton from "./PokemonSkeleton";
import PokemonCard from "./PokemonCard";

const PokemonsPage = () => {
  const pokemons = useSelector(pokemonsSelector);
  const cachedPokemons = useSelector(cachedPokemonsSelector);
  const {dispatch} = useStore()
  const handleGetPokemons = async() => {
    
    const obj = { page: 0, cachedPokemons: cachedPokemons.data, pokemons: pokemons.data }

    console.log(obj)
    dispatch(getCachedPokemons({ page: 0, cachedPokemons: cachedPokemons.data, pokemons: pokemons.data }) as any)
    setTimeout(() => {
        dispatch(getPokemons({ page: 0, cachedPokemons: cachedPokemons.data, pokemons: pokemons.data }) as any);
        
    }, 599);
    
  };
  useEffect(() => {
    handleGetPokemons(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  console.log(cachedPokemons)
  console.log(pokemons)
  return ( 
      <InfiniteScroll
        data={pokemons.data}
        paginationHandler={(page: number) =>
         getPokemons({
            page,
            cachedPokemons: cachedPokemons.data,
            pokemons: pokemons.data,
          })
        }
        isLoading={pokemons.status.state === SliceStatus.LOADING}
      >
        {({ mutatePage }) => (
          <>
            <div className="flex w-full flex-col justify-center">
              <PokemonForm
                placeholder="Search for a pokémon"
                mutatePage={mutatePage}
              />
            </div>
            <div className="mx-auto w-full text-center">
              {!(
                cachedPokemons.status.state === SliceStatus.LOADING ||
                cachedPokemons.status.state === SliceStatus.IDLE
              ) && (
                <>
                {console.log(pokemons.data)}
                  <InfiniteScroll.Container>
                    {pokemons.data.map((pokemon, index) =>
                      pokemon === null ? (
                        <PokemonSkeleton key={`loading-${index}`} />
                      ) : (
                        <PokemonCard key={pokemon.id} {...pokemon} />
                      )
                    )}
                  </InfiniteScroll.Container>
                  <InfiniteScroll.Waypoint />
                </>
              )}
            </div>
          </>
        )}
      </InfiniteScroll>
   
  );
};
export default PokemonsPage;