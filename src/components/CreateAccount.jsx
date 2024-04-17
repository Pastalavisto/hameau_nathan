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
} from "@mui/material";
import { Form } from "react-router-dom";

function CreateAccount() {
  return (
    <Page>
      <Form method="post" action="/create-user">
        <Container sx={{ marginBottom: 1, textAlign: "center" }}>
          <Typography variant="h1">Créer un utilisateur</Typography>
        </Container>
        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="h4">Choisir un avatar</Typography>
        </Box>
        <Stack direction="row" sx={{ marginBottom: 1 }}>
          <Button>
            <Avatar alt="Sacha" src="/src/assets/1.jpg"></Avatar>
          </Button>
          <Button>
            <Avatar alt="Chloé" src="/src/assets/2.jpg"></Avatar>
          </Button>
          <Button>
            <Avatar alt="Ondinne" src="/src/assets/3.jpg"></Avatar>
          </Button>
        </Stack>
        <Box sx={{ marginBottom: 1 }}>
          <TextField variant="outlined" fullWidth placeholder="Nom" />
        </Box>
        <Box sx={{ marginBottom: 1 }}>
          <Button variant="contained" fullWidth>
            Cliquer ici
          </Button>
        </Box>
      </Form>
    </Page>
  );
}

export default Example;
