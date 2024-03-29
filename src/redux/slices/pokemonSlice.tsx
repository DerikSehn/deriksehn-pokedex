import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NamedAPIResource } from "./types";
import {
  statusHandlerReducer,
  transformSpriteToBaseImage,
  wrapReduxAsyncHandler,
} from "./utilities";
import { camelCaseObject } from "@/lib/utils/camelCaseObject";
import fromApi, { getPokemonImage } from "@/api/fromApi";
import { SliceStatus } from "@/lib/globals";
import { RootState } from "../store";
import { baseImageUrl } from "@/api/axios";

export const PAGINATE_SIZE = 6;

export type Pokemon = {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  abilities: {
    isHidden: boolean;
    slot: number;
    ability: NamedAPIResource;
  }[];
  forms: NamedAPIResource[];
  moves: {
    move: NamedAPIResource;
  }[];
  sprites: {
    frontDefault: string;
    frontShiny: string;
    frontFemale: string;
    frontShinyFemale: string;
    backDefault: string;
    backShiny: string;
    backFemale: string;
    backShinyFemale: string;
  };
  species: NamedAPIResource[];
  stats: {
    baseStat: number;
    effort: number;
    stat: NamedAPIResource;
  }[];
  types: {
    slot: number;
    type: NamedAPIResource;
  }[];
};

type SliceState = {
  data: (Pokemon | null)[];
  status: {
    state: SliceStatus;
  };
};

const initialState: SliceState = {
  data: [],
  status: {
    state: SliceStatus.IDLE,
  },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    ...statusHandlerReducer,
    initializePokemonsReducer(state: any, action: PayloadAction<{ size: number }>) {
      const size = action?.payload.size || 0
      const nullValues = new Array<null>(size).fill(null);
      if (state.data.length === 0) {
        state.data = nullValues;
      } else {
        state.data = state.data.concat(nullValues);
      }

    },
    getPokemonsReducer(
      state: any,
      action: PayloadAction<{ pokemon: Pokemon; index: number; size: number }>
    ) {

      const { pokemon, size, index } = action.payload;
      const isPokemonAlreadyExists = state.data.find(
        (existingPokemon: any) =>
          existingPokemon !== null && existingPokemon.id === pokemon.id
      );
      if (!isPokemonAlreadyExists) {
        state.data[state.data.length - (size - index)] = pokemon;
      }
    },
    getSinglePokemonReducer(
      state: any,
      action: PayloadAction<{ pokemon: Pokemon }>
    ) {
      const { pokemon } = action.payload;
      const isPokemonAlreadyExists = state.data.find(
        (existingPokemon: any) =>
          existingPokemon !== null && existingPokemon.id === pokemon.id
      );
      if (!isPokemonAlreadyExists) {
        state.data.push(pokemon);
      }
    },
    resetPokemonsReducer(state: any, action: any) {
      state.data = [];
    },
  },
});

export const pokemonsReducer = pokemonsSlice.reducer;
export const {
  initialize,
  error,
  success,
  initializePokemonsReducer,
  getPokemonsReducer,
  resetPokemonsReducer,
  getSinglePokemonReducer,
} = pokemonsSlice.actions;

export const pokemonsSelector = (state: RootState) => state.pokemons;

const statusHandler = { initialize, error, success };

export const getPokemons = wrapReduxAsyncHandler(
  statusHandler,
  async (dispatch, { page, cachedPokemons, pokemons }: any) => {
    const size = PAGINATE_SIZE - (pokemons?.length % PAGINATE_SIZE);
    const results = cachedPokemons?.slice(page, page + size) || [];
    dispatch(initializePokemonsReducer({ size }));
    console.log('results', results)
    for await (const [index, { url }] of results.entries()) {
      const pokemonId = Number(url.split("/").slice(-2)[0]);
      const pokemon = await fromApi.getPokemonByNameOrId(pokemonId);
      const pokemonImageUrl = getPokemonImage(
        pokemon.id
      );

      dispatch(
        getPokemonsReducer({
          pokemon: {
            ...camelCaseObject(pokemon),
            sprites: {
              frontDefault: pokemonImageUrl,
            },
          },
          size,
          index,
        })
      );
    }
  }

);

export const getPokemonById = wrapReduxAsyncHandler(
  statusHandler,
  async (dispatch, { pokemonId }) => {
    const pokemon = await fromApi.getPokemonByNameOrId(pokemonId);
    const pokemonImageUrl = getPokemonImage(
      pokemon.id
    );
    const transformedPokemon = {
      ...camelCaseObject(pokemon),
      sprites: { frontDefault: pokemonImageUrl },
    };
    dispatch(getSinglePokemonReducer({ pokemon: transformedPokemon }));
  }
);

export const getPokemonsDynamically = wrapReduxAsyncHandler(
  statusHandler,
  async (dispatch, { pokemonIds }) => {
    for await (const id of pokemonIds) {
      const pokemon = await fromApi.getPokemonByNameOrId(id);
      const pokemonImageUrl = getPokemonImage(
        pokemon.id
      );
      const transformedPokemon = {
        ...camelCaseObject(pokemon),
        sprites: { frontDefault: pokemonImageUrl },
      };
      dispatch(getSinglePokemonReducer({ pokemon: transformedPokemon }));
    }
  }
);



export const getPokemonsByType = wrapReduxAsyncHandler(
  statusHandler,
  async (dispatch, { page, cachedPokemons, pokemons }: any) => {
    const size = PAGINATE_SIZE - (pokemons.length % PAGINATE_SIZE);
    const results = cachedPokemons.slice(page, page + size);

    dispatch(initializePokemonsReducer({ size }));
    for await (const [index, { url }] of results.entries()) {
      const pokemonId = Number(url.split("/").slice(-2)[0]);
      const pokemon = await fromApi.getPokemonByNameOrId(pokemonId);
      const pokemonImageUrl = getPokemonImage(
        pokemon.id
      );


      dispatch(
        getPokemonsReducer({
          pokemon: {
            ...camelCaseObject(pokemon),
            sprites: {
              frontDefault: pokemonImageUrl,
            },
          },
          size,
          index,
        })
      );
    }
  }
);