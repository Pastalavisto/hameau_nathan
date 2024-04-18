import React from "react";

import { getPokemon } from "../services/pokemonapi";
import { Box, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Pokemon({ pokemonId }) {
  const [pokemon, setPokemon] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    getPokemon(pokemonId).then(setPokemon);
  }, [pokemonId]);
  function handleClick() {
    navigate(`/pokemon/${pokemon.id}`);
  }
  return (
    <>
      {pokemon ? (
        <Card sx={{ border: "1px solid #00000025" }}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>{pokemon.name}</p>
          <Box sx={{ width:"80%" }}>
            <Button onClick={handleClick} variant="contained" fullWidth>Voir le pokémon</Button>
          </Box>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Pokemon;
