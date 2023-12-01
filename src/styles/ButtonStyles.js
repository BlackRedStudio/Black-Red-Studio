import styled from 'styled-components';

import { media, colors, vars } from './styles-utils';

export const ButtonS = styled.span`
  > a,
  > button {
    font-size: 1.4rem;
    font-weight: 600;
    padding: ${({ $elSize }) => {
      if ($elSize === 'big') return '20px 45px';
      if ($elSize === 'medium') return '18px 40px';
      return '14px 30px';
    }};
    margin: ${p => p.$mobileMargin};
    border: none;
    width: ${p => p.$elMobileWidth};
    display: inline-block;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    transition: all ease-in-out 0.4s;
    @media (${media.small}) {
      margin: ${p => p.$mediumMargin};
    }
    @media (${media.large}) {
      font-size: 1.6rem;
      width: ${p => p.$elWidth};
      margin: ${p => p.$elMargin};
    }
    ${({ $elType }) => {
      if ($elType === 'white')
        return `
          border: 2px solid #fff;
          color: #fff;
          &:hover {
            background: #fff;
            color: ${colors.dark};
          }
      `;
      if ($elType === 'whiteFilled')
        return `
          border: 2px solid #fff;
          color: ${colors.dark};
          background: #fff;
          &:hover {
            background: transparent;
            color: #fff;
          }
      `;
      if ($elType === 'inverted')
        return `
          color: #fff;
          background-image: ${vars.linearGradient};
          &:hover {
            background-image: ${vars.linearGradientInverted};
          }
      `;
      if ($elType === 'black')
        return `
          color: #fff;
          background: #000;
          &:hover {
            background: ${colors.lightBlack};
          }
      `;
      return `
          border: 2px solid ${colors.darkRed};
          color: ${colors.red};
          &:hover {
            background-image: ${vars.linearGradient};
            color: #fff;
          }
      `;
    }}
  }
`;
