import React from "react";
import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Add from "../pages/Assignment/Add";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/addassignment",
        Component: Add,
      },
      
    ],
  },
]);

export default Router;
