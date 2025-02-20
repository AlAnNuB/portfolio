import { routes } from "@/routes/routes";
import { GlobalStyles } from "@/styles/globalStyles";
import { darkTheme } from "@/styles/themes";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";

function App() {
	const [theme] = useState<DefaultTheme>(darkTheme);

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={routes} />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
