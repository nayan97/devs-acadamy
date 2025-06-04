import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Layouts from '../Layouts/Layouts';

const Router = createBrowserRouter([
  {
    path: "/",
     Component: Layouts,
  },
]);

export default Router;