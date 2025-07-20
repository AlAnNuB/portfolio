import { routes } from "@/routes/routes";
import { GlobalStyles } from "@/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { useStorageTheme } from "./hooks/useStorageTheme";

function App() {
	const { getTheme } = useStorageTheme();

	return (
		<ThemeProvider theme={getTheme}>
			<RouterProvider router={routes} />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
