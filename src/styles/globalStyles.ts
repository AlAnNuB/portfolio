import Sprinkle from "@/assets/Sprinkle.svg";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --animate-duration: 1s;
    --animate-delay: 1s;
    --backgroundTextContent: #00000080;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Source Sans 3", sans-serif;
    color: ${({ theme }) => theme.color};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    background-image: url(${Sprinkle});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  `;
