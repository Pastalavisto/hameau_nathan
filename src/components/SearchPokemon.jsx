import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Box,
  Stack,
} from "@mui/material";
import React, { useEffect } from "react";
import { getPokemonList } from "../services/pokemonapi";
import { getSpriteType, setSpriteType } from "../services/users";
import PokemonList from "./PokemonList";
export default function SearchPokemon() {
  const [pokemons, setPokemons] = React.useState([]);
  const [sprite, setSprite] = React.useState(getSpriteType());
  const [generation, setGeneration] = React.useState(1);
  useEffect(() => {
    getPokemonList(generation).then((data) => {
      setPokemons(data.results);
    });
  }, [generation]);

  function handleSpriteTypeChange(e) {
    setSprite(e.target.value);
    setSpriteType(e.target.value);
  }

  function handleSearch(event) {
    getPokemonList(generation).then((data) => {
      const filteredPokemons = data.results.filter((pokemon) =>
        pokemon.name.includes(event.target.value)
      );
      setPokemons(filteredPokemons);
    });
  }

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Rechercher un pokémon
      </Typography>
      <TextField
        onChange={(e) => handleSearch(e)}
        name="name"
        variant="outlined"
        fullWidth
        placeholder="Recherche ..."
      />
      <Stack direction="column" spacing={2} marginBottom={2} marginTop={2}>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Typography variant="body1">Sprite</Typography>
          <Select value={sprite} onChange={(e) => handleSpriteTypeChange(e)}>
            <MenuItem value="front_default">Default</MenuItem>
            <MenuItem value="other.dream_world.front_default">
              Dream World
            </MenuItem>
            <MenuItem value="other.official-artwork.front_default">
              Official
            </MenuItem>
          </Select>
        </Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Typography variant="body1">Génération</Typography>
          <Select
            value={generation}
            onChange={(e) => setGeneration(e.target.value)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
          </Select>
        </Stack>
      </Stack>
      <PokemonList pokemons={pokemons} sprite={sprite} />
    </Container>
  );
}
