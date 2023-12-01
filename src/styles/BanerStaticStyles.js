import styled from 'styled-components';

import Arrows from '../assets/arrows.svg';
import { media, vars, colors } from './styles-utils';

export const BanerStaticS = styled.section`
  background-image: ${vars.linearGradient};
  color: #fff;
  text-align: center;
  height: ${p => (p.$half ? `50vh` : `100vh`)};
  padding-top: 72px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  position: relative;
  p,
  h2 {
    opacity: 0;
    padding: 10px;
    margin-top: 0;
    div {
      position: relative;
      display: inline-block;
    }
  }
  h2 {
    margin-bottom: 100px;
  }
  @media (${media.large}) {
    h2 {
      margin-bottom: 200px;
    }
  }
  @media (${media.large}) and (max-height: 720px) {
    h2 {
      margin-bottom: 290px;
    }
  }
  @media (${media.landscape}) {
    height: 100vh;
  }
`;
export const ArrowsS = styled(Arrows)`
  width: 40px;
  display: inline-block;
  transition: 0.35s;
`;
export const ScrollDownWrapperS = styled.div`
  width: 64px;
  height: 64px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1s scroll-up-down infinite;
  cursor: pointer;
  transition: 0.35s;
  @keyframes scroll-up-down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(50px);
    }
  }
`;
export const CollisionBoxS = styled.div`
  position: absolute;
  bottom: 100px;
  z-index: 2;
  left: calc(50% - 32px);
  padding-bottom: 50px;
  &:hover {
    ${ArrowsS} {
      filter: brightness(0);
    }
    ${ScrollDownWrapperS} {
      background: #fff;
    }
  }
  @media (${media.small}) {
    bottom: 250px;
  }
  @media (${media.landscape}) {
    display: none;
  }
`;
export const WaveSvgS = styled.svg`
  position: absolute;
  left: 0;
  right: 0;
  top: 1px;
  bottom: 0;
  z-index: 1;
  transform: rotate(180deg);
  path {
    fill: ${colors.lightGray};
  }
`;
