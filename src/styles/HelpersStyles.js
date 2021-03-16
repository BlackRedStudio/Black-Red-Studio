import styled from 'styled-components';
import { media } from './styles-utils';

export const Spacer = styled.div`
  height: ${(p) => p.heightMobile || `70px`};
  @media (${media.large}) {
    height: ${(p) => p.heightPC || `100px`};
  }
`;
