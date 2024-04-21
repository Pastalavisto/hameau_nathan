import React, { useEffect } from "react";
import {
  Button,
  Typography,
  Box,
  Avatar,
  Stack,
  Container,
  TextField,
  Icon,
} from "@mui/material";
import { Form, Navigate, useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  getUsers,
  setUser,
  deleteUser,
} from "../services/users";
import DeleteIcon from "@mui/icons-material/Delete";

function Connection() {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState(getUsers());
  function connect(index) {
    setUser(users[index]);
    navigate("/pokedex");
  }
  function handleDeleteUser(index) {
    deleteUser(index);
    setUsers(getUsers());
  }
  return (
    <>
      <Box sx={{ marginBottom: 1, textAlign: "center" }}>
        <Typography variant="h1">Connexion au pokedex</Typography>
      </Box>
      <Container>
        <Stack spacing={2}>
          {users.map((user, index) => (
            <Stack
              key={index}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button onClick={() => connect(index)} sx={{ width: "100%" }}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  sx={{ marginBottom: 1, width: "100%" }}
                >
                  <Avatar
                    alt="Avatar"
                    src={"/src/assets/" + user.avatarId + ".jpg"}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Typography variant="h4">{user.name}</Typography>
                </Stack>
              </Button>
              <DeleteIcon
                onClick={() => handleDeleteUser(index)}
                sx={{ cursor: "pointer", width: 30, height: 30 }}
              />
            </Stack>
          ))}
        </Stack>
        <Button
          onClick={() => navigate("/create-user")}
          variant="contained"
          fullWidth
        >
          Créer un utilisateur
        </Button>
      </Container>
    </>
  );
}

export default Connection;
