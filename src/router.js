import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import App from "./components/App";
import { redirect } from "react-router-dom";
import Enterance from "./components/Enterance";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={localStorage.getItem("access_token") ? <App /> : <Enterance />}
    >
      <Route
        path="/login"
        element={<Enterance />}
        loader={async () => {
          if (localStorage.getItem("access_token")) {
            return redirect("/");
          }
        }}
      />
      <Route
        path="/app"
        element={<App />}
        loader={async () => {
          if (!localStorage.getItem("access_token")) {
            return redirect("/");
          }
        }}
      />
      <Route
        path="/logout"
        loader={async () => {
          if (localStorage.getItem("access_token")) {
            localStorage.removeItem("access_token");
            return window.location.reload();
          }
          return redirect("/");
        }}
      />
    </Route>
  )
);

export default router;
