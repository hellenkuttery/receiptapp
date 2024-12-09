



import React, { startTransition } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <PrivateRouter />,
        children: [
          {
            path: "",
            element: <Home />,
          },
        ],
      },
    ],
    {
      future: {
        v7_skipActionErrorRevalidation: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_startTransition: true,
      },
    }
  );

  return (
    <React.Fragment>
      {startTransition(() => (
        <RouterProvider router={router} />
      ))}
    </React.Fragment>
  );
};

export default AppRouter;
