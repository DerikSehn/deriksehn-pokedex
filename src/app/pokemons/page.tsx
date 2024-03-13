import React from "react"; 
import { useSelector } from "react-redux"; 
import { getPokemons, pokemonsSelector } from "@/redux/slices/pokemonSlice";
import { cachedPokemonsSelector } from "@/redux/slices/cachedPokemonsSlice";
import InfiniteScroll from "@/components/native/InfiniteScroll";
import { SliceStatus } from "@/lib/globals";
import PokemonForm from "./PokemonForm";
import PokemonSkeleton from "./PokemonSkeleton";
import PokemonCard from "./PokemonCard";

const PokemonsPage = () => {
  const pokemons = useSelector(pokemonsSelector);
  const cachedPokemons = useSelector(cachedPokemonsSelector);

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
            <div className="my-4 md:my-6 lg:my-8 w-full">
              <PokemonForm
                placeholder="Search for a pokémon..."
                mutatePage={mutatePage}
              />
            </div>
            <div className="mx-auto w-full text-center">
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