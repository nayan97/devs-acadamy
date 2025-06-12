import React from "react";
import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Add from "../pages/Assignment/Add";
import PrivateRoute from './PrivateRoute';
import ViewAssignment from "../pages/Assignment/ViewAssignment";
import Spiner from '../components/Spiner';
import ErrorPage from '../components/ErrorPage';

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    hydrateFallbackElement: <Spiner></Spiner>,
     errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><Add></Add></PrivateRoute>,
      },

      {
        path: "/assignments",
        loader: ()=> fetch('http://localhost:3000/assignment'),
        Component: ViewAssignment,
      },
      
      
    ],
  },
]);

export default Router;
