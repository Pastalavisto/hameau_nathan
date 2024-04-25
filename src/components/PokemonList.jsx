import React from "react";
import { Grid, Container } from "@mui/material";
import Pokemon from "./Pokemon";

export default function PokemonList({ pokemons, sprite }) {
  if (pokemons.length === 0) {
    return null;
  }
  return (
    <Container sx={{ marginBottom: 1, textAlign:"center" }}>
      <Grid container spacing={2} sx={{ marginBottom: 1 }}>
        {pokemons.map((pokemon, index) => (
          <Grid item xs={6} key={index}>
            <Pokemon pokemonName={pokemon.name} sprite={sprite} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
