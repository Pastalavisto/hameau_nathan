import React from "react";
import  App  from "./App"
import  Pokedex  from "./components/Pokedex"
import  CreateUser  from "./components/CreateUser"
import  Connection  from "./components/Connection"
import { createBrowserRouter } from "react-router-dom";
import SearchPokemon from "./components/SearchPokemon";
import PokemonPage from "./components/PokemonPage";
import { Outlet, Navigate } from "react-router-dom";
import { getCurrentUser } from "./services/users";

const PrivateRoutes = ({element}) => {
  const user = getCurrentUser();
  return user ? element : <Navigate to="/" />;
}

export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Connection /> },
      { path: "/pokedex", element: <PrivateRoutes element={<Pokedex />}/> },
      { path: "/create-user", element: <CreateUser /> },
      { path: "/pokemon-list", element: <PrivateRoutes element={<SearchPokemon />}/> },
      { path: "/pokemon/:name", element: <PrivateRoutes element={<PokemonPage />}/>},
      { path: "*", element: <h1>404</h1>}
    ],
  },
]);

