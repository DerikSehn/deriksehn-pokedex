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

    dispatch(getCachedPokemons({ page: 0, cachedPokemons: cachedPokemons.data, pokemons: pokemons.data }) as any)
     
    
  };
  useEffect(() => {
    handleGetPokemons(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
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
            <div className="flex flex-col justify-center bg-rich_black-600 w-screen">
              <PokemonForm
                placeholder="Search for a pokémon"
                mutatePage={mutatePage}
              />
            </div>
            <div className="w-full text-center">
              {!(
                cachedPokemons.status.state === SliceStatus.LOADING ||
                cachedPokemons.status.state === SliceStatus.IDLE
              ) && (
                <>
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