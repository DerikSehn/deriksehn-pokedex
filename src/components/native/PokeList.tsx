/* make a list of Pokemon */
import React, { useState, useEffect } from "react";
 
/**
 * Pokemon interface
 * @param name Pokemon name
 */
interface PokemonProps {
  name: string;
}
 
 
/**
 * PokeList component
 * @returns List of Pokemon
 */
const PokeList = () => {
  const [pokemon, setPokemon] = useState<PokemonProps[]>([]);


  /* Como utilizar a api pokemon? */
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) =>{
        console.log(data)
        setPokemon(data.results)});
  }, []);

  return (
    <div>
      {pokemon.map((pokemon) => (
          <Pokemon key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokeList; 
const Pokemon = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
 