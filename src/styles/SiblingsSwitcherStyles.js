import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

import Arrows from '../assets/arrows.svg';
import { media, colors } from './styles-utils';

export const SiblingsSwitcherS = styled(TransitionLink)`
  position: fixed;
  top: 50%;
  z-index: 4;
  background-color: ${colors.lightGray};
  padding: 10px;
  width: 120px;
  transition: 0.35s;
  ${p =>
    p.$next
      ? `right: 0;
    transform: translate(100%);
    `
      : `left: 0;
    transform: translate(-100%);`}
  &:hover {
    transform: translate(0);
  }
`;
export const SiblingsArrowS = styled(Arrows)`
  position: fixed;
  cursor: pointer;
  top: 50%;
  width: 30px;
  filter: brightness(0);
  padding: 10px;
  z-index: 3;
  box-sizing: content-box;
  animation: 1s ${p => (p.$next ? `scroll-right-left` : `scroll-left-right`)}
    infinite;
  animation-direction: alternate-reverse;
  ${p => (p.$next ? `right: 0;` : `left: 0;`)}
  @media(${media.small}) {
    &:hover + a {
      transform: translate(0);
    }
  }
  @keyframes scroll-right-left {
    0% {
      transform: rotate(-90deg) translateY(0px);
    }
    100% {
      transform: rotate(-90deg) translateY(-20px);
    }
  }
  @keyframes scroll-left-right {
    0% {
      transform: rotate(90deg) translateY(0px);
    }
    100% {
      transform: rotate(90deg) translateY(-20px);
    }
  }
`;
export const SiblingsTitleS = styled.div`
  color: #000;
  margin-bottom: 7px;
`;
export const SiblingsImageS = styled.img`
  width: 100%;
`;
