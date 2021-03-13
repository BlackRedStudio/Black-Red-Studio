import styled from 'styled-components';

import { colors } from './styles-utils';

export const H2S = styled.h2`
  margin: 0 0 ${(p) => p.marginBottom};
  ${(p) => p.color && `color: ${p.color};`}
  text-align: ${({ align }) => align};
`;

export const PreHeaderS = styled.p`
  text-transform: uppercase;
  color: ${(p) => (p.color ? p.color : colors.lightRed)};
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 16px;
`;
