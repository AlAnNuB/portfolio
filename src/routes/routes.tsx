import { createBrowserRouter, Navigate } from "react-router-dom";
import { Landing } from "../pages/landing";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  { path: "/sobre", element: <Navigate to="/#sobre" replace /> },
  { path: "/technologies", element: <Navigate to="/#sobre" replace /> },
  { path: "/projects", element: <Navigate to="/#trabalhos" replace /> },
  { path: "/contact", element: <Navigate to="/#contato" replace /> },
]);
