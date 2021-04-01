import styled from 'styled-components';
import PaintDrip from '../utils/paint-drip-transition';

import { media } from './styles-utils';

export const LogoContainerS = styled.div`
  @media (${media.toLarge}) {
    position: relative;
    z-index: 3;
    width: 100%;
    background: #fff;
    height: 100%;
  }
`;
export const LogoLinkS = styled(PaintDrip)`
  @media (${media.toLarge}) {
    width: 70%;
  }
  display: block;
`;

export const LogoS = styled.img`
  height: 62px;
  width: 220px;
  position: relative;
  top: 5px;
  transition: 0.35s linear;
  pointer-events: none;
  padding-left: 15px;
  &:first-child {
    display: none;
  }
  &:hover {
    opacity: 0.8;
  }
  @media (${media.large}) {
    padding-left: 0;
    &:first-child {
      display: initial;
    }
    &:last-child {
      display: none;
    }
  }
  @-moz-document url-prefix() {
    top: 30px;
    left: 50px;
    transform: scale(1.5);
  }
`;

export const HeaderContainerS = styled.header`
  top: 0;
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 99;
  @media (${media.toLarge}) {
    height: 72px;
    transition: transform 0.35s linear;
    > div {
      padding: 0;
    }
  }
  @media (${media.large}) {
    right: 17px;
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    background: transparent;
  }
  &.scrolled {
    background: #fff;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
    h1 img:first-child {
      display: none;
    }
    h1 img:last-child {
      display: initial;
    }
    a {
      color: #000;
    }
    @media (${media.large}) {
      padding: 5px 0;
    }
  }
`;
export const HamburgerS = styled.div`
  position: absolute;
  z-index: 4;
  right: 15px;
  height: 30px;
  width: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  > div {
    height: 3px;
    background: #000;
    width: 20px;
    margin-bottom: 3px;
    transition: transform 0.35s;
  }
  &.active > div {
    position: absolute;
    &:first-child {
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      display: none;
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  }
  @media (${media.large}) {
    display: none;
  }
`;
