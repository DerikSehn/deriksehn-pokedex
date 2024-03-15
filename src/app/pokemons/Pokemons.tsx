"use client";
import InfiniteScroll from "@/components/native/InfiniteScroll";
import { SliceStatus } from "@/lib/globals";
import { cachedPokemonsSelector, getCachedPokemons } from "@/redux/slices/cachedPokemonsSlice";
import { getPokemons, Pokemon, pokemonsSelector } from "@/redux/slices/pokemonSlice";
import { useEffect } from "react";
import { useSelector, useStore } from "react-redux";
import PokemonCard from "./PokemonCard";
import PokemonForm from "./PokemonForm";
import PokemonSkeleton from "./PokemonSkeleton";

const PokemonsPage = () => {
  const pokemons = useSelector(pokemonsSelector);
  const cachedPokemons = useSelector(cachedPokemonsSelector);
  const { dispatch } = useStore()
  const handleGetPokemons = async () => {

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
          <div className="w-full px-10 text-center bg-rich_black-800">
            {!(
              cachedPokemons.status.state === SliceStatus.LOADING ||
              cachedPokemons.status.state === SliceStatus.IDLE
            ) && (
                <>
                  <InfiniteScroll.Container>
                    {pokemons.data.map((pokemon: Pokemon | null, index: number) =>
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