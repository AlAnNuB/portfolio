import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { routes } from "@/routes/routes";
import { GlobalStyles } from "@/styles/globalStyles";
import { theme } from "@/styles/themes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
