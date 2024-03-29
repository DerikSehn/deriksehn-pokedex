import { HTTP_METHODS } from "@/lib/globals";
import Axios from "axios";

const axios: any = Axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const createApiRequest = async (
  url: string,
  method: HTTP_METHODS,
  data: any
) => {
  try {
    const response = await axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    });
    return response.data;
  } catch (err: any) {
    throw new Error(err);
    // const statusCode = err.response.status;
    // const messages = err.response.data.data[0].messages;
    // throw new Error(JSON.stringify({ statusCode, messages }));
  }
};
export const baseImageUrl = "";

export default axios;