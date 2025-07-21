import { routes } from "@/routes/routes";
import { GlobalStyles } from "@/styles/globalStyles";
import { RouterProvider } from "react-router-dom";
import { ThemeProviderContext } from "./context/themeContext";

export default function App() {
  return (
    <ThemeProviderContext>
      <RouterProvider router={routes} />
      <GlobalStyles />
    </ThemeProviderContext>
  );
}
