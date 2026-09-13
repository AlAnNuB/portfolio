import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-regular: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    --font-extrabold: 800;
    --font-black: 900;
    --max-width: 1200px;
    --header-height: 4.5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
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
    overflow: auto;
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
