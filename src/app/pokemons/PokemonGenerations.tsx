
import PokemonIcon from "@/components/native/util/PokemonIcon";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { importPokemonImage } from "@/lib/globals";
import { PokemonGenerationsEnum } from "@/redux/slices/cachedPokemonsSlice";
import React, { useCallback } from "react";
import PokemonGenerationCard from "./PokemonGenerationCard";


const generations = [
  [
    importPokemonImage("squirtle"),
    importPokemonImage("charmander"),
    importPokemonImage("bulbasaur"),
  ],
  [
    importPokemonImage("totodile"),
    importPokemonImage("cyndaquil"),
    importPokemonImage("chikorita"),
  ],
  [
    importPokemonImage("mudkip"),
    importPokemonImage("torchic"),
    importPokemonImage("treecko"),
  ],
  [
    importPokemonImage("piplup"),
    importPokemonImage("chimcar"),
    importPokemonImage("turtwig"),
  ],
  [
    importPokemonImage("oshawott"),
    importPokemonImage("tepig"),
    importPokemonImage("snivy"),
  ],
  [
    importPokemonImage("froakie"),
    importPokemonImage("fennekin"),
    importPokemonImage("chespin"),
  ],
  [
    importPokemonImage("popplio"),
    importPokemonImage("litten"),
    importPokemonImage("rowlet"),
  ],
];

type Props = {
  selectedGeneration: PokemonGenerationsEnum | null;
  setSelectedGeneration: React.Dispatch<
    React.SetStateAction<PokemonGenerationsEnum | null>
  >;
  changeGenerationHandler: () => void;
  isLoading: boolean;
};
/**
 * Componente que exibe as gerações de Pokémon e permite selecionar uma geração.
 * 
 * @component
 * @param {Object} Props - As propriedades do componente.
 * @param {PokemonGenerationsEnum | null} Props.selectedGeneration - A geração de Pokémon selecionada.
 * @param {React.Dispatch<React.SetStateAction<PokemonGenerationsEnum | null>>} Props.setSelectedGeneration - Função para atualizar a geração de Pokémon selecionada.
 * @param {() => void} Props.changeGenerationHandler - Função para lidar com a mudança de geração.
 * @param {boolean} Props.isLoading - Indica se o componente está carregando.
 * @returns {JSX.Element} O componente PokemonGenerations.
 */
const PokemonGenerations = ({
  selectedGeneration,
  setSelectedGeneration,
  changeGenerationHandler,
  isLoading,
}: Props) => {
  const indexToPokemonGenerations = useCallback(
    (realIndex: number): PokemonGenerationsEnum | null => {
      const pokemonGenerations = Object.entries(PokemonGenerationsEnum);
      let selectedEnum: PokemonGenerationsEnum | null = null;

      pokemonGenerations.forEach(([_, b], index) => {
        if (index === realIndex) {
          selectedEnum = b;
        }
      });
      return selectedEnum;
    },
    []
  );

  const pokemonGenerationsToIndex = useCallback(
    (selectedGeneration: PokemonGenerationsEnum): number => {
      const pokemonGenerations = Object.entries(PokemonGenerationsEnum);
      let selectedIndex: number = 0;

      pokemonGenerations.forEach(([_, b], index) => {
        if (b === selectedGeneration) {
          selectedIndex = index;
        }
      });

      return selectedIndex;
    },
    []
  );

  return (
    <Dialog>
      <Button
        disabled={isLoading}
        className={
          "bg-primaryGray px-4 py-1 rounded-lg text-white hover:border-transparent focus:outline-none " +
          " " +
          (isLoading
            ? "opacity-25 cursor-default"
            : "cursor-pointer transform hover:-translate-y-1 hover:shadow transition-all duration-200 ease-in-out")
        }
      >
        <div className="flex justify-between">
          {selectedGeneration !== null ? (
            <>
              {generations[pokemonGenerationsToIndex(selectedGeneration)].map(
                (image, index) => (
                  <PokemonIcon
                    key={`${image}-${index}`}
                    src={image}
                    alt={`Pokemon Icon Image`}
                  />
                )
              )}
            </>
          ) : (
            <>
              <PokemonIcon
                src={importPokemonImage("bulbasaur")}
                alt="Bulbasaur"
              />
              <PokemonIcon
                src={importPokemonImage("charmander")}
                alt="Charmander"
              />
              <PokemonIcon
                src={importPokemonImage("squirtle")}
                alt="Squirtle"
              />
            </>
          )}
        </div>
      </Button>
      <Button
        title="Pokémon Generations"
        onClick={changeGenerationHandler}
      >
        <div className="mx-auto py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-6">
          {generations.map((images, index) => (
            <PokemonGenerationCard
              key={`generations-${index}`}
              images={images}
              generation={index + 1}
              isSelected={
                selectedGeneration === indexToPokemonGenerations(index) &&
                selectedGeneration !== null
              }
              handleClick={() => {
                setSelectedGeneration((previousGeneration) => {
                  const pickedGeneration = indexToPokemonGenerations(index);
                  return previousGeneration === pickedGeneration
                    ? null
                    : pickedGeneration;
                });
              }}
            />
          ))}
        </div>
      </Button>
    </Dialog>
  );
};
export default PokemonGenerations;