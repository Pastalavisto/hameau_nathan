import React from "react";
import  App  from "./App"
import  Pokedex  from "./components/Pokedex"
import  CreateUser  from "./components/CreateUser"
import  Connection  from "./components/Connection"
import { createBrowserRouter } from "react-router-dom";
import SearchPokemon from "./components/SearchPokemon";
import PokemonPage from "./components/PokemonPage";
export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Connection /> },
      { path: "/pokedex", element: <Pokedex /> },
      { path: "/create-user", element: <CreateUser /> },
      { path: "/pokemon-list", element: <SearchPokemon /> },
      { path: "/pokemon/:name", element: <PokemonPage />},
      { path: "*", element: <h1>404</h1>}
    ],
  },
]);