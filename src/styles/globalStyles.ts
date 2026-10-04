import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-regular: ${({ theme }) => theme.fontWeights.regular};
    --font-medium: ${({ theme }) => theme.fontWeights.medium};
    --font-semibold: ${({ theme }) => theme.fontWeights.semibold};
    --font-bold: ${({ theme }) => theme.fontWeights.bold};
    --font-extrabold: ${({ theme }) => theme.fontWeights.extrabold};
    --font-black: ${({ theme }) => theme.fontWeights.black};
    --max-width: ${({ theme }) => theme.maxWidth};
    --header-height: ${({ theme }) => theme.sizes.header};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.sizes.scrollbar};
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.ink};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.yellowMuted};
    border-radius: ${({ theme }) => theme.radii.scrollbar};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.yellow};
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
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    overflow-x: hidden;
  }

  :focus-visible {
    outline: 0.125rem solid ${({ theme }) => theme.colors.black};
    outline-offset: 0.1875rem;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.yellowMuted};
    color: ${({ theme }) => theme.colors.black};
  }
`;
