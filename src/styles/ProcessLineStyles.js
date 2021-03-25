import styled from 'styled-components';

import { media, vars } from './styles-utils';

export const ProcessContainerS = styled.div`
  position: relative;
  @media (${media.toLarge}) {
    overflow: hidden;
  }
`;
export const ProcessLineS = styled.div`
  height: 100%;
  left: 50px;
  position: absolute;
  top: 90px;
  width: 1px;
  background-image: ${vars.linearGradient};
`;
export const ProcessItemS = styled.div`
  display: flex;
  z-index: 2;
  position: relative;
  height: 150px;
  margin-bottom: 25px;
`;
export const ProcessItemIconS = styled.div`
  background-image: ${vars.linearGradient};
  border-radius: 50%;
  min-width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 35px;
    transition: transform 0.5s ease-in-out;
  }
  &:hover > img {
    transform: scale(1.2);
  }
`;
export const ProcessItemTextS = styled.div`
  padding-left: 20px;
`;
export const ProcessItemTitleS = styled.div`
  text-transform: uppercase;
  margin: 10px 0;
  font-weight: 700;
  font-size: 1.8rem;
`;
export const ProcessItemDescS = styled.div`
  @media (${media.large}) {
    font-size: 1.8rem;
  }
`;
