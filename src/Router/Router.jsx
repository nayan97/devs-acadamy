import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Layouts from '../Layouts/Layouts';
import Home from '../pages/Home/Home';

const Router = createBrowserRouter([
  {
    path: "/",
     Component: Layouts,
       children: [
    {
      index: true, 
      Component: Home
    },
]
  },
]);

export default Router;