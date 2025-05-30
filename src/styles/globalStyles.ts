import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {}
  
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
    background: ${({ theme }) => theme.bodyBackground};
    overflow: hidden;
  }
  `;
