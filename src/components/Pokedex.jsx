import React from "react";
import {
  Button,
  Divider,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { getCurrentUser, addPokemonToPokedex } from "../services/users";
import { useNavigate } from "react-router-dom";
import Pokemon from "./Pokemon";
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
          <Grid container spacing={2} sx={{marginBottom: 1}}>
            {user.pokedex.map((pokemonName, index) => (
              <Grid item xs={6} key={index}>
                <Pokemon pokemonName={pokemonName} />
              </Grid>
            ))}
          </Grid>
        )}
        <Divider variant="middle" sx={{marginBottom: 1}} />
        <Button fullWidth onClick={handleSearchClick} variant="contained">Rechercher un pokémon</Button>
      </Container>
    </>
  );
}

export default Pokedex;
