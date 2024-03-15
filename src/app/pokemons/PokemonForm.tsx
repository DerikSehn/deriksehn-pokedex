import { SliceStatus } from "@/lib/globals";
import { PokemonGenerationsEnum, filterPokemonsByGenerationReducer, randomizePokemonsReducer, searchPokemonsByNameReducer } from "@/redux/slices/cachedPokemonsSlice";
import { pokemonsSelector, resetPokemonsReducer } from "@/redux/slices/pokemonSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonGenerations from "./PokemonGenerations";
import SearchInput from "@/components/native/util/SearchInput";
import { TypeAnimation } from 'react-type-animation';


type Props = {
  mutatePage: React.Dispatch<React.SetStateAction<number>>;
  placeholder?: string;
  initialValue?: string;
  changeHandler?: () => void;
};

const PokemonForm = ({
  placeholder,
  initialValue = "",
  changeHandler,
  mutatePage,
}: Props) => {
  const dispatch = useDispatch();
  const pokemons = useSelector(pokemonsSelector);
  const [value, setValue] = useState<string>(initialValue);
  const [
    selectedGeneration,
    setSelectedGeneration,
  ] = useState<PokemonGenerationsEnum | null>(null);
  const inputRef = useRef(0);

  const isLoading = pokemons.status.state === SliceStatus.LOADING;

  useEffect(() => {
    if (changeHandler) {
      clearTimeout(inputRef.current);
      inputRef.current = window.setTimeout(() => {
        changeHandler();
      }, 100);
    }
  }, [value, changeHandler]);

  const submitFormHandler = () => {
    if (!isLoading) {
      dispatch(resetPokemonsReducer({} as {} & void));
      dispatch(searchPokemonsByNameReducer({ pokemonName: value }));
      mutatePage(0);
    }
  };

  const changeGenerationHandler = () => {
    if (!isLoading) {
      dispatch(resetPokemonsReducer({} as {} & void));
      dispatch(filterPokemonsByGenerationReducer({ selectedGeneration }));
      if (selectedGeneration === null) {
        dispatch(randomizePokemonsReducer({}));
        mutatePage(0);
      } else {
        mutatePage(0);
      }
    }
  };

  return (
    <div className="flex items-center pt-10 justify-center flex-col   overflow-visible  bg-rich_black-800 rounded-t-[4rem] xl:rounded-t-[12rem]">

      <div className="h-full w-screen"  >

        <PokemonGenerations
          selectedGeneration={selectedGeneration}
          setSelectedGeneration={setSelectedGeneration}
          changeGenerationHandler={changeGenerationHandler}
          isLoading={isLoading}
        />
      </div>
      <div className="lg:h-32 h-60   lg:-translate-y-[12dvw]"  >
        <SearchInput
          placeholder={placeholder || "Search an item"}
          value={value}
          disabled={isLoading}
          onSearch={() => submitFormHandler()}
          onKeyPress={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              submitFormHandler();
            }
          }}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setValue(e.currentTarget.value)
          }
        />
      </div>

    </div>
  );
};

export default PokemonForm;