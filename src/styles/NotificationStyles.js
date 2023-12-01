import styled from 'styled-components';

import { media, colors } from './styles-utils';

export const NotificationS = styled.div`
  position: fixed;
  z-index: 999;
  background: ${(p) =>
    p.$type === 'success' ? `${colors.darkRed}dd` : `#000000dd`};
  color: #fff;
  top: 30%;
  left: 10%;
  right: 10%;
  bottom: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  opacity: 0;
  padding: 20px;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.3;
  animation: opacity-in-out ${(p) => p.$lifetime} linear;
  @media (${media.large}) {
    top: 40%;
    bottom: 40%;
    left: 30%;
    right: 30%;
    min-width: 500px;
    min-height: 200px;
    font-size: 2rem;
  }
`;
