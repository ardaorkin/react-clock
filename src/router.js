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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={localStorage.getItem("access_token") ? <App /> : <Login />}
    >
      <Route
        path="/login"
        element={<Login />}
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
          if (localStorage.removeItem("access_token")) {
            return window.location.reload();
          }
          return redirect("/");
        }}
      />
    </Route>
  )
);

export default router;
