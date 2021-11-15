import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";

const config = [
  {
    path: "/",
    element: <div>/</div>
  },
  { path: "team", element: <div>team</div> }
];

export default function Admin() {
  const routes = useRoutes(config);

  return <BrowserRouter>{{ routes }}</BrowserRouter>;
}
