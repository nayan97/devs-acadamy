import React from "react";
import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Add from "../pages/Admin/Assignment/Add";
import PrivateRoute from "./PrivateRoute";
import ViewAssignment from "../pages/Admin/Assignment/ViewAssignment";
import AssUpdate from "../pages/Admin/Assignment/AssUpdate";
import AssDetail from "../pages/Admin/Assignment/AssDetail";
import SubmitAssignment from "../pages/Admin/Assignment/SubmitAssignment";
import MyAssignment from "../pages/Admin/MyAssignment/MyAssignment";
import PendingAssignment from "../pages/PendingAssignment/PendingAssignment";
import GiveMark from "../pages/PendingAssignment/GiveMark";
import Spiner from "../components/Spiner";
import ErrorPage from "../components/ErrorPage";
import Body from "../pages/Admin/Body";
import AllAssignment from "../pages/Admin/Assignment/AllAssignment";
import AboutUs from "../pages/page/AboutUs";
import Blog from "../pages/page/blog";
import ContactUs from "../pages/page/ContactUs";

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
        path: "/blogs",
        Component: Blog,
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },

            {
        path: "/contact-us",
        Component: ContactUs,
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
        path: "/check_assignment/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11-a11-server-rho.vercel.app/myassignment/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <GiveMark></GiveMark>
          </PrivateRoute>
        ),
      },
      {
        path: "/myassignment",
        loader: () =>
          fetch(`https://b11-a11-server-rho.vercel.app/myassignment`),
        element: (
          <PrivateRoute>
            <MyAssignment></MyAssignment>
          </PrivateRoute>
        ),
      },

      {
        path: "/ass_details/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11-a11-server-rho.vercel.app/assignment/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <AssDetail></AssDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "/submit_assignment/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11-a11-server-rho.vercel.app/assignment/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <SubmitAssignment></SubmitAssignment>
          </PrivateRoute>
        ),
      },

      {
        path: "/assignments",
        loader: () => fetch("https://b11-a11-server-rho.vercel.app/assignment"),
        Component: ViewAssignment,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>,
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: Body,
      },

      {
        path: "addassignment",
        element: <Add></Add>,
      },
      {
        path: "ass_update/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11-a11-server-rho.vercel.app/assignment/${params.id}`
          ),
        element: (
            <AssUpdate></AssUpdate>
        ),
      },
      {
        path: "all-assignment",
        loader: () => fetch("https://b11-a11-server-rho.vercel.app/assignment"),
        Component: AllAssignment,
      },
      {
        path: "pending-assignment",
        loader: () =>
          fetch(`https://b11-a11-server-rho.vercel.app/myassignment`),
        element: (
       
            <PendingAssignment></PendingAssignment>
      
        ),
      },
      {
        path: "myassignment",
        loader: () =>
          fetch(`https://b11-a11-server-rho.vercel.app/myassignment`),
        element: <MyAssignment></MyAssignment>,
      },
    ],
  },
]);

export default Router;
