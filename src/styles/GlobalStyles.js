import { createGlobalStyle } from 'styled-components';

import { media, colors } from './styles-utils';

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
    overflow: hidden;
  }
  .tl-wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    scrollbar-color: ${colors.lightRed} ${colors.gray};
  }
  .overflow {
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    width: 17px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.gray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.lightRed};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.darkRed};
  }
  [data-sal=slide-down-big] {
    transform: translateY(-50%);
  }
  @media(${media.toLarge}) {
    [data-sal][data-sal-delay="300"] {
      transition-delay: .1s;
    }
  }
  h1 {
    margin: 0;
  }
  h2 {
    font-size: 3.0rem;
    @media(${media.large}) {
      font-size: 6.0rem;
    }
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
  #svg-draw svg {
    fill-opacity: 0;
    transition: fill-opacity 1s;
  }
  #svg-draw svg.finished {
    fill-opacity: 1;
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
  @keyframes opacity-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
