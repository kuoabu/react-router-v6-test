import React, { lazy } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import "./styles.css";
let Admin = lazy(() => import("./Admin.js"));

const config = [
  {
    path: "/",
    element: <Home />
  },
  { path: "/admin", element: <Admin /> }
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

function Routes() {
  const routes = useRoutes(config);
  return routes;
}

function Home() {
  return (
    <main>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <button
          onClick={() => {
            window.history.go("/admin");
          }}
        >
          push
        </button>
      </div>
    </main>
  );
}
