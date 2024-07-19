import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --animate-duration: 1s;
    --animate-delay: 1s;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Source Sans 3", sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  /* body {
    transition: all 0.50s linear;
  } */
  `;
