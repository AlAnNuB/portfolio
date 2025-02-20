import { createBrowserRouter } from "react-router-dom";
import { Default } from "../layouts/default/default";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { Technologies } from "../pages/technologies";

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
