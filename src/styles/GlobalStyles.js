import { createGlobalStyle } from 'styled-components';

import { colors } from './styles-utils';

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
    font-size: 1.6rem;
    background-color: ${colors.lightGray};
  }
  .overflow {
    overflow: hidden;
  }
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
    line-height: 1.2;
  }
  h1, h2, h3, h4, h5, h6 {
      font-family: 'Lora', sans-serif;
      font-weight: 500;
  }
  .grecaptcha-badge {
    visibility: hidden;
  }
  a {
    text-decoration: none;
    color: ${colors.lightRed};
    :focus {
      outline: 0;
    }
  }
  @keyframes opacity-transform-y {
      100% {
          opacity: 1;
          transform: translateY(0);
      }
  }
  @keyframes opacity-in-out {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }
`;
