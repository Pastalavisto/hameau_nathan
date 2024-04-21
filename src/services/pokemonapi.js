import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});

export default api;

async function getPokemonList(generation) {
    const { offset, limit } = getGenerationLimit(generation);
    const response = await api.get(`/pokemon`, {
        params: {
            offset,
            limit,
        },
    });
    return response.data;
}

async function getPokemon(name) {
    const response = await api.get(`/pokemon/${name}`);
    return response.data;
}

function getPokemonImage(pokemon, spriteType) {
    switch (spriteType) {
        case "front_default":
            return pokemon.sprites.front_default;
        case "other.dream_world.front_default":
            return pokemon.sprites.other.dream_world.front_default;
        case "other.official-artwork.front_default":
            return pokemon.sprites.other["official-artwork"].front_default;
        default:
            return pokemon.sprites.front_default;
    }
}

function getGenerationLimit(generation) {
    switch (generation) {
        case 1:
            return { offset: 0, limit: 151 };
        case 2:
            return { offset: 151, limit: 100 };
        case 3:
            return { offset: 251, limit: 135 };
        case 4:
            return { offset: 386, limit: 107 };
        case 5:
            return { offset: 493, limit: 156 };
        case 6:
            return { offset: 649, limit: 72 };
        case 7:
            return { offset: 721, limit: 88 };
        case 8:
            return { offset: 809, limit: 89 };
        default:
            return { offset: 0, limit: 151 };
    }
}

export { getPokemonList, getPokemon, getPokemonImage };