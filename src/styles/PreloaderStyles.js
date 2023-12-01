import styled from 'styled-components';

import { colors } from './styles-utils';

export const PreloaderWrapperS = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const PreloaderS = styled.div`
  width: 56px;
  height: 56px;
  border: 8px solid ${colors.darkRed};
  border-right-color: transparent;
  border-radius: 50%;
  position: absolute;
  animation: loader-rotate 1s linear infinite;
  margin: 0 auto;
  ${(p) => p.$top};
  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background: 0 0;
    border-radius: 50%;
    position: absolute;
    top: -1px;
    left: 33px;
  }
  @keyframes loader-rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
