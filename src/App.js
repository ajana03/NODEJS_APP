import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Browser from "./pages/Browser";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFoundPage />,
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "browse", element: <Browser /> },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
