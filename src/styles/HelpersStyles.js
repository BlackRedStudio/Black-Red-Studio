import styled from 'styled-components';
import { media } from './styles-utils';

export const Spacer = styled.div`
  height: ${p => p.$heightMobile || `70px`};
  @media (${media.large}) {
    height: ${p => p.$heightPC || `100px`};
  }
`;

export const SliderOverlayS = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${p => p.$opacity || 0.8};
  pointer-events: none;
`;
