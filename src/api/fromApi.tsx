import { HTTP_METHODS } from "@/lib/globals";
import { createApiRequest } from "./axios";

class ApiCallCreator {
  getPokemons(limit: number, offset?: number) {
    return createApiRequest(
      `/pokemon?limit=${limit}&offset=${offset}`,
      HTTP_METHODS.GET,
      {}
    );
  }
  getPokemonByNameOrId(id: number | string) {
    return createApiRequest(`/pokemon/${id}/`, HTTP_METHODS.GET, {});
  }
  getSpeciesByNameOrId(id: number | string) {
    return createApiRequest(`/pokemon-species/${id}/`, HTTP_METHODS.GET, {});
  }
  getEvolutionChainByNameOrId(id: string | number) {
    return createApiRequest(`/evolution-chain/${id}/`, HTTP_METHODS.GET, {});
  }
}


/**
 * Retrieves the image source of a Pokémon based on provided url with id.
 * This is necessary because the evolution endpoint doesn't provide the ID of each evolved Pokémon.
 *
 * @returns {string} - The image source of the Pokémon.
 */
export const getPokemonImage = (id: number) => {
  const isPokemonHasSvg = id < 650;

  const base = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other`;

  if (isPokemonHasSvg) {
    return `${base}/dream-world/${id}.svg`;
  }

  return `${base}/official-artwork/${id}.png`;
};


const fromApi = new ApiCallCreator();
export default fromApi;