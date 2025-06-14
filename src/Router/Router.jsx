import React from "react";
import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Add from "../pages/Assignment/Add";
import PrivateRoute from "./PrivateRoute";
import ViewAssignment from "../pages/Assignment/ViewAssignment";
import AssUpdate from "../pages/Assignment/AssUpdate";
import AssDetail from "../pages/Assignment/AssDetail";
import SubmitAssignment from "../pages/Assignment/SubmitAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import PendingAssignment from "../pages/PendingAssignment/PendingAssignment";
import GiveMark from "../pages/PendingAssignment/GiveMark";
import Spiner from "../components/Spiner";
import ErrorPage from "../components/ErrorPage";

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
        element: (
          <PrivateRoute>
            <Add></Add>
          </PrivateRoute>
        ),
      },
           {
        path: "/pendingassignment",
        loader: () => fetch(`http://localhost:3000/myassignment`),
        element: (
          <PrivateRoute>
            <PendingAssignment></PendingAssignment>
          </PrivateRoute>
        ),
      },
        {
        path: "/check_assignment/:id",
        loader: ({params}) => fetch(`http://localhost:3000/myassignment/${params.id}`),
        element: (
          <PrivateRoute>
            <GiveMark></GiveMark>
          </PrivateRoute>
        ),
      },
            {
        path: "/myassignment",
                 loader: () => fetch(`http://localhost:3000/myassignment`),
        element: (
          <PrivateRoute>
            <MyAssignment></MyAssignment>
          </PrivateRoute>
        ),
      },
        {
        path: "/ass_update/:id",
         loader: ({params}) => fetch(`http://localhost:3000/assignment/${params.id}`),
        element: (
          <PrivateRoute>
            <AssUpdate></AssUpdate>
          </PrivateRoute>
        ),
      },
      {
        path: "/ass_details/:id",
         loader: ({params}) => fetch(`http://localhost:3000/assignment/${params.id}`),
        element: (
          <PrivateRoute>
            <AssDetail></AssDetail>
          </PrivateRoute>
        ),
      },
         {
        path: "/submit_assignment/:id",
         loader: ({params}) => fetch(`http://localhost:3000/assignment/${params.id}`),
        element: (
          <PrivateRoute>
            <SubmitAssignment></SubmitAssignment>
          </PrivateRoute>
        ),
      },



      {
        path: "/assignments",
        loader: () => fetch("http://localhost:3000/assignment"),
        Component: ViewAssignment,
      },
    ],
  },
]);

export default Router;
