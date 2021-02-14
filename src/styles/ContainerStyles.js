import styled from 'styled-components';

import { media } from './styles-utils';

export const ContainerS = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  ${(p) =>
    p.flex &&
    `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
  `}
  @media (${media.large}) {
    width: 1300px;
    margin: 0 auto;
    ${({ flex }) =>
      flex &&
      `
      flex-wrap: nowrap;
      justify-content: space-between;
    `}
  }
`;

export const ContainerInnerS = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 100%;
    ${(p) => {
      if (p.children.length === 2)
        return `
        @media (${media.medium}) {
          width: 50%;
        }
      `;
      if (p.children.length === 3)
        return `
        @media (${media.medium}) {
          width: 50%;
        }
        @media (${media.large}) {
          width: 33.33%;
        }
      `;
      return `
        @media (${media.small}) {
          width: 50%;
        }
        @media (${media.medium}) {
          width: 33.33%;
        }
        @media (${media.large}) {
          width: 25%;
        }
      `;
    }}
  }
`;
