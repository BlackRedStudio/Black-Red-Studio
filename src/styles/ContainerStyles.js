import styled from 'styled-components';

import { media } from './styles-utils';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  ${({ flex }) =>
    flex &&
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
