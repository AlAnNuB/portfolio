import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-regular: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    --font-extrabold: 800;
    --font-black: 900;
    --max-width: 1240px;
    --header-height: 60px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1b1924;
  }

  ::-webkit-scrollbar-thumb {
    background: #bea34c;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #fcdb74;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  body {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    overflow-x: hidden;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.black};
    outline-offset: 3px;
  }

  ::selection {
    background: ${({ theme }) => theme.selectionColor};
    color: ${({ theme }) => theme.black};
  }
`;
