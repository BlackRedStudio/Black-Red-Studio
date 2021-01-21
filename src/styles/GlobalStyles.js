import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
  }
  h1, h2, h3, h4, h5, h6 {
      font-family: 'Lora', sans-serif;
      font-weight: 500;
  }
  a {
    text-decoration: none;
    :focus {
      outline: 0;
    }
  }
`;
