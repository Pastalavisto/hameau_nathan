import React from "react";
import Page from "./Page";
import {
  Button,
  Typography,
  Box,
  Avatar,
  Stack,
  Container,
  TextField,
  Grid,
} from "@mui/material";
import { Form } from "react-router-dom";
import { getUser, addPokemonToPokedex } from "../services/user";
import Pokemon from "./Pokemon";
function Pokedex() {
  const user = getUser();
  return (
    <>
      <Stack direction="row" spacing={1} justifyContent={"center"} alignItems={"center"} sx={{ marginBottom: 1}}>
        <Avatar
          alt="Avatar"
          src={"/src/assets/" + user.avatarId + ".jpg"}
          sx={{ width: 75, height: 75 }}
        />
        <Typography variant="h4">{"Bonjour "+user.name}</Typography>
        <Button variant="contained" sx={{ marginLeft: "auto" }}> Se déconnecter </Button>
      </Stack>
      <Container sx={{ marginBottom: 1, textAlign:"center" }}>
        <Typography variant="h1">Pokedex</Typography>
        <Grid container spacing={2}>
          {user.pokedex.map((pokemonId) => (
            <Grid item xs={6} key={pokemonId}>
              <Pokemon pokemonId={pokemonId} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Pokedex;
