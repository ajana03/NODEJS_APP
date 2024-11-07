import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Browser from "../pages/Browser";
import Layout from "./Layout";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/browse", element: <Browser /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
