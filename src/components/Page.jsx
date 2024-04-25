import React from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Avatar,
  Button,
  Stack,
} from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  disconnect,
} from "../services/users";

function Page({ children }) {
  const navigate = useNavigate();
  const user = getCurrentUser();
  function handleDisconnectClick() {
    disconnect();
    navigate("/");
  }
  function handleClick() {
    navigate("/pokedex");
  }
  return (
    <Box>
      <Box sx={{ backgroundColor: "#F8F4F4", minHeight: "100vh" }}>
        <Container maxWidth="sm">
          <Box sx={{ paddingTop: 5, paddingBottom: 6 }}>
            <Box sx={{ marginBottom: 5, maxWidth: "300px", marginX: "auto" }}>
              <img onClick={handleClick} src={logo} alt="logo pokemon" style={{cursor:"pointer"}}/>
            </Box>
            {user && (
              <Stack
                direction="row"
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ marginBottom: 1 }}
              >
                <Avatar
                  alt="Avatar"
                  src={"/src/assets/" + user.avatarId + ".jpg"}
                  sx={{ width: 50, height: 50 }}
                />
                <Typography variant="body1">
                  {"Bonjour " + user.name}
                </Typography>
                <Button
                  onClick={handleDisconnectClick}
                  variant="contained"
                  sx={{ marginLeft: "auto" }}
                >
                  {" "}
                  Se déconnecter{" "}
                </Button>
              </Stack>
            )}
            <Card sx={{ padding: 2 }}>{children}</Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Page;
