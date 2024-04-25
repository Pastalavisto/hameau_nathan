import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Typography,
  Container,
} from "@mui/material";
import { getCurrentUser } from "../services/users";
import { useNavigate } from "react-router-dom";
import PokemonList from "./PokemonList";
function Pokedex() {
  const user = getCurrentUser();
  const navigate = useNavigate();
  function handleSearchClick (){
    navigate("/pokemon-list");
  }
  return (
    <>
      <Container sx={{ marginBottom: 1 }}>
        <Typography variant="h1" sx={{textAlign:"center"}}>Pokedex</Typography>
        {user.pokedex.length === 0 ? (
          <Typography variant="body1" sx={{marginBottom: 1, textAlign:"left"}}>Votre pokedex est vide</Typography>
        ) : (
          <PokemonList pokemons={user.pokedex} sprite={user.spriteType} />
        )}
        <Divider variant="middle" sx={{marginBottom: 1}} />
        <Button fullWidth onClick={handleSearchClick} variant="contained">Rechercher un pokémon</Button>
      </Container>
    </>
  );
}

export default Pokedex;
