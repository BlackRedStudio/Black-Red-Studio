import styled from 'styled-components';

import { media, colors } from './styles-utils';

export const H2S = styled.h2`
  font-size: 3rem;
  margin: 0 0 30px;
  text-align: ${({ align }) => align};
  @media (${media.large}) {
    font-size: 6rem;
  }
`;

export const PreHeaderS = styled.p`
  text-transform: uppercase;
  color: ${colors.lightRed};
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 16px;
`;
