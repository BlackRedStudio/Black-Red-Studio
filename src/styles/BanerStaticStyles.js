import styled from 'styled-components';

import Arrows from '../assets/arrows.svg';
import { vars } from './styles-utils';

export const BanerStaticS = styled.section`
  background-image: ${vars.linearGradient};
  color: #fff;
  text-align: center;
  height: ${p => (p.half ? `50vh` : `100vh`)};
  padding-top: 72px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  position: relative;
  p,
  h2 {
    padding: 10px;
    margin-top: 0;
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
  bottom: 50px;
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
`;
