import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});

export default api;

async function getPokemonList(offset = 0, limit = 20) {
    const response = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
    return response.data;
}

async function getPokemon(id) {
    const response = await api.get(`/pokemon/${id}`);
    return response.data;
}

export { getPokemonList, getPokemon };