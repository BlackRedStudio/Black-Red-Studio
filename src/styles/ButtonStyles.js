import styled from 'styled-components';

import { media, colors, vars } from './styles-utils';

export const ButtonS = styled.span`
  > a,
  > button {
    font-size: 1.4rem;
    font-weight: 600;
    margin: ${({ elMargin }) => elMargin};
    padding: ${({ elSize }) => {
      if (elSize === 'big') return '20px 45px';
      if (elSize === 'medium') return '18px 40px';
      return '14px 30px';
    }};
    border: none;
    width: ${({ elWidth }) => elWidth};
    display: inline-block;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    transition: all ease-in-out 0.4s;
    ${({ elType }) => {
      if (elType === 'white')
        return `
          border: 2px solid #fff;
          color: #fff;
          :hover {
            background: #fff;
            color: ${colors.dark};
          }
      `;
      if (elType === 'whiteFilled')
        return `
          border: 2px solid #fff;
          color: ${colors.dark};
          background: #fff;
          :hover {
            background: transparent;
            color: #fff;
          }
      `;
      if (elType === 'inverted')
        return `
          color: #fff;
          background-image: ${vars.linearGradient};
          :hover {
            background-image: ${vars.linearGradientInverted};
          }
      `;
      return `
          border: 2px solid ${colors.darkRed};
          color: ${colors.red};
          :hover {
            opacity: 0.8;
            background-image: ${vars.linearGradient};
            color: #fff;
          }
      `;
    }}
    @media (${media.large}) {
      font-size: 1.6rem;
    }
  }
`;
