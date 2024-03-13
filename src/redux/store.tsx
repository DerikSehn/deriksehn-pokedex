import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import { cachedPokemonsReducer } from "./slices/cachedPokemonsSlice";
import { pokemonsReducer } from "./slices/pokemonSlice";
import { speciesReducer } from "./slices/speciesSlice";
import { evolutionChainReducer } from "./slices/evolutionChainSlice";
export const rootReducer = combineReducers({
  cachedPokemons: cachedPokemonsReducer,
  pokemons: pokemonsReducer,
  species: speciesReducer,
  evolutionChain: evolutionChainReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;