import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <div className="sm:absolute sm:right-0 sm:left-0 p-4 my-36 mx-auto sm:max-w-[450px] sm:mb-[50px] ">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
