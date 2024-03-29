
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
  null,
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
  null,
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
    <div className="w-full grid grid-cols-12">
      <span className="col-span-12 my-10 text-center">

        <Button
          disabled={isLoading}
          className={
            "overflow-visible bg-rich_black-500 " +
            "px-4 py-1 rounded-2xl text-white hover:border-transparent " +
            "focus:outline-none " +
            "hover:bg-rich_black-600"

          }
        >
          <div className="flex justify-between">
            {selectedGeneration !== null ? (
              <>
                {(generations[pokemonGenerationsToIndex(selectedGeneration)] || []).map(
                  (image, index) => (
                    <PokemonIcon
                      height={100}
                      width={100}
                      key={`${image}-${index}`}
                      src={image}
                      alt={`Pokemon Icon Image`}
                    />
                  )
                )}
              </>
            ) : (
              <>
                <PokemonIcon height={100}
                  width={100}
                  src={importPokemonImage("bulbasaur")}
                  alt="Bulbasaur"
                />
                <PokemonIcon height={100}
                  width={100}
                  src={importPokemonImage("charmander")}
                  alt="Charmander"
                />
                <PokemonIcon height={100}
                  width={100}
                  src={importPokemonImage("squirtle")}
                  alt="Squirtle"
                />
              </>
            )}
          </div>
        </Button>
      </span>
      <span className="col-span-12 text-center">

        <div className="space-x-2 space-y-2 grid grid-cols-12 px-10">
          {generations.map((images, index) =>
            <div key={`generations-${index}`} className="col-span-4">
              {images ? (
                <PokemonGenerationCard

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
              ) : null}
            </div>
          )}
        </div>

      </span>
    </div>

  );
};
export default PokemonGenerations;