import React from "react";

import { getPokemon, getPokemonImage} from "../services/pokemonapi";
import { getSpriteType } from "../services/users";
import { Box, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Pokemon({ pokemonName,sprite }) {
  const [pokemon, setPokemon] = React.useState(null);
  const [spriteType, setSpriteType] = React.useState(sprite);
  const [pokemonImage, setPokemonImage] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    getPokemon(pokemonName).then((data) => {
      setPokemon(data);
      setPokemonImage(getPokemonImage(data, spriteType));
    });
  }
  , [pokemonName]);
  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }
  return (
    <>
      {pokemon ? (
        <Card sx={{ border: "1px solid #00000025", padding:2 }}>
          <img src={pokemonImage} alt={pokemon.name} />
          <Typography variant="h4" sx={{textTransform:"capitalize"}}>{pokemon.name}</Typography>
          <Box>
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
