import { createBrowserRouter } from "react-router-dom";
import { Default } from "../layouts/default";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Technologies } from "../pages/technologies";
import { Projects } from "../pages/projects";
import { Contact } from "../pages/contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <About />,
      },
      {
        path: "/technologies",
        element: <Technologies />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
