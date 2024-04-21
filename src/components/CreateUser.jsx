import React, { useEffect } from "react";
import Page from "./Page";
import {
  Button,
  Typography,
  Box,
  Avatar,
  Stack,
  Container,
  TextField,
} from "@mui/material";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { createUser, getCurrentUser } from "../services/users";

function CreateUser() {

  const [avatarId, setAvatarId] = React.useState(0);
  const navigate = useNavigate();
  function submit(event) {
    event.preventDefault();
    
    const form = new FormData(event.target);
    const name = form.get("name");
    createUser(name, avatarId);
    navigate("/");
  }
  return (
    <>
      <Form onSubmit={submit}>
        <Container sx={{ marginBottom: 1, textAlign: "center" }}>
          <Typography variant="h1">Créer un utilisateur</Typography>
        </Container>
        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="h4">Choisir un avatar</Typography>
        </Box>
        <Stack direction="row" spacing={1} sx={{ marginBottom: 1 }}>
          <Avatar
            onClick={() => setAvatarId(1)}
            alt="Sacha"
            src="/src/assets/1.jpg"
            sx={{ opacity: avatarId === 1 ? 1 : 0.5, cursor: "pointer", width: 75, height: 75}}
          ></Avatar>
          <Avatar
            onClick={() => setAvatarId(2)}
            alt="Chloé"
            src="/src/assets/2.jpg"
            sx={{ opacity: avatarId === 2 ? 1 : 0.5, cursor: "pointer", width: 75, height: 75}}
          ></Avatar>
          <Avatar
            onClick={() => setAvatarId(3)}
            alt="Ondinne"
            src="/src/assets/3.jpg"
            sx={{ opacity: avatarId === 3 ? 1 : 0.5, cursor: "pointer", width: 75, height: 75}}
          ></Avatar>
        </Stack>
        <Box sx={{ marginBottom: 1 }}>
          <TextField name="name" variant="outlined" fullWidth placeholder="Nom" />
        </Box>
        <Box sx={{ marginBottom: 1 }}>
          <Button type="submit" variant="contained" fullWidth>
            Cliquer ici
          </Button>
        </Box>
      </Form>
    </>
  );
}

export default CreateUser;
