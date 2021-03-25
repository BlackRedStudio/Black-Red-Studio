import styled from 'styled-components';

import { media, colors } from './styles-utils';

export const CloudWrapperS = styled.div`
  opacity: 0;
  transform: translateY(-100%);
  position: absolute;
  top: 0;
  width: 100%;
  padding: 10px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: ${colors.dark}dd;
  animation: opacity-transform-y 0.7s both ease-in-out;
  display: none;
  @media (${media.large}) {
    display: block;
  }
`;
export const CloudTitleS = styled.div`
  font-weight: 700;
  color: #fff;
  margin-bottom: 7px;
  font-size: 2rem;
`;
export const CloudDescS = styled.div`
  color: #fff;
`;
