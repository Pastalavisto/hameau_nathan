import { Container, Typography, TextField, Select, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import { getPokemonList } from "../services/pokemonapi";
import { getSpriteType, setSpriteType } from "../services/users";
import Pokemon from "./Pokemon";
import PokemonList from "./PokemonList";
export default function SearchPokemon() {
  const [pokemons, setPokemons] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [sprite, setSprite] = React.useState(getSpriteType());

  useEffect(() => {
    getPokemonList(1).then((data) => {
      setPokemons(data.results);
    });
  }, []);
  function handleSpriteTypeChange(e) {
    setSprite(e.target.value);
    setSpriteType(e.target.value);
  }
  function handleSearch(event) {
    getPokemonList(1).then((data) => {
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
        onChange={handleSearch}
        name="name"
        variant="outlined"
        fullWidth
        placeholder="Recherche ..."
      />
      <Select value={sprite} onChange={handleSpriteTypeChange}>
        <MenuItem value="front_default">Face</MenuItem>
        <MenuItem value="other.dream_world.front_default">Dream World</MenuItem>
        <MenuItem value="other.official-artwork.front_default">
          Official
        </MenuItem>
      </Select>
      <PokemonList pokemons={pokemons} sprite={sprite} />
    </Container>
  );
}
