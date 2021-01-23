import styled from 'styled-components';

import { media, colors, vars } from './styles-utils';

export const ButtonS = styled.span`
  > a {
    font-size: 1.4rem;
    font-weight: 600;
    margin: ${({ elMargin }) => elMargin};
    padding: ${({ elSize }) => {
      if (elSize === 'big') return '20px 45px';
      if (elSize === 'medium') return '18px 40px';
      return '14px 30px';
    }};
    width: ${({ elWidth }) => elWidth};
    display: inline-block;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    transition: background ease-in-out 0.35s;
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
      return `
          border: 2px solid ${colors.darkRed};
          color: ${colors.red};
          :hover {
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
