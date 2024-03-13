import { HTTP_METHODS } from "@/lib/globals";
import { createApiRequest } from "./axios";

class ApiCallCreator {
  getPokemons(limit: number, offset?: number) {
    console.log( limit, offset)  
    return createApiRequest(
      `/pokemon?limit=${limit}&offset=${offset}`,
      HTTP_METHODS.GET,
      {}
    );  
  }
  getPokemonByNameOrId(id: number | string) {
    console.log( id)
    return createApiRequest(`/pokemon/${id}/`, HTTP_METHODS.GET, {});
  }
  getSpeciesByNameOrId(id: number | string) {
    console.log( id)
    return createApiRequest(`/pokemon-species/${id}/`, HTTP_METHODS.GET, {});
  }
  getEvolutionChainByNameOrId(id: string | number) {
    console.log( id)
    return createApiRequest(`/evolution-chain/${id}/`, HTTP_METHODS.GET, {});
  }
}

const fromApi = new ApiCallCreator();
export default fromApi;