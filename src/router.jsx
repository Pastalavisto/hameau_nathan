import React from "react";
import  App  from "./App"
import  Pokedex  from "./components/Pokedex"
import  CreateUser  from "./components/CreateUser"
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <CreateUser /> },
      { path: "/pokedex", element: <Pokedex /> },
    ],
  },
]);