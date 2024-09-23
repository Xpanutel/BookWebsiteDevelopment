import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout.jsx";
import Single from "../pages/Single/Single.jsx";
import Home from "../pages/Home/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/manga/:id",
    element: <Layout />,
    children: [
      {
        element: <Single />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
