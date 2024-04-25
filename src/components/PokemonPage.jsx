import React, { useEffect } from "react";
import { getPokemon, getPokemonImage } from "../services/pokemonapi";
import { useParams } from "react-router-dom";
import {
  Chip,
  Typography,
  Stack,
  Box,
  Grid,
  Button,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import {
  addPokemonToPokedex,
  pokemonIsInPokedex,
  removePokemonFromPokedex,
  getCurrentUser,
} from "../services/users";

export default function PokemonPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = React.useState(null);
  const navigate = useNavigate();
  const user = getCurrentUser();
  useEffect(() => {
    getPokemon(name).then((data) => {
      setPokemon(data);
    });
  }, [name]);
  function handleAddClick() {
    addPokemonToPokedex(pokemon);
    navigate("/pokedex");
  }
  function handleReturnClick() {
    navigate("/pokedex");
  }
  function handleDeleteClick() {
    removePokemonFromPokedex(pokemon.name);
    navigate("/pokedex");
  }
  return (
    <>
      {pokemon && (
        <Box>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={1}
          >
            <Typography variant="h1" sx={{ textTransform: "capitalize" }}>
              {pokemon.name}
            </Typography>
            <Typography variant="h2">{"#" + pokemon.id}</Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} marginBottom={2}>
            {pokemon.types.map((type, index) => (
              <Chip
                key={index}
                label={type.type.name}
                sx={{ textTransform: "capitalize" }}
              />
            ))}
          </Stack>
          <Box justifyContent={"center"} display={"flex"} marginBottom={2}>
            <img
              src={getPokemonImage(pokemon, user.spriteType)}
              alt={pokemon.name}
              style={{ width: "300px", height: "300px" }}
            />
          </Box>
          <Typography variant="h2">Statistiques</Typography>
          <Grid container spacing={2} marginBottom={1}>
            {pokemon.stats.map((stat, index) => (
              <Grid
                item
                xs={4}
                key={index}
                gap={1}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <CircularProgressWithLabel value={stat.base_stat} />
                <Typography variant="body1">{stat.stat.name}</Typography>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={1}>
            {pokemonIsInPokedex(pokemon.name) ? (
              <Button onClick={handleDeleteClick} fullWidth variant="contained">
                Retirer du pokédex
              </Button>
            ) : (
              <Button onClick={handleAddClick} fullWidth variant="contained">
                Ajouter dans le pokédex
              </Button>
            )}
            <Button onClick={handleReturnClick} fullWidth variant="outlined">
              Retour au pokédex
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
}

export function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
}
