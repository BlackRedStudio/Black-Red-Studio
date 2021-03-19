import { Link } from 'gatsby';
import styled from 'styled-components';

import { media } from './styles-utils';

export const LogoContainerS = styled(Link)`
  display: block;
`;

export const LogoS = styled.img`
  height: 62px;
  width: 220px;
  position: relative;
  top: 5px;
  transition: 0.35s linear;
  pointer-events: none;
  padding-left: 20px;
  display: ${({ logoTitle }) =>
    logoTitle === 'logo-blackred-white' ? 'none' : 'initial'};
  &:hover {
    opacity: 0.8;
  }
  @media (${media.large}) {
    padding-left: 0;
    display: ${({ logoTitle }) =>
      logoTitle !== 'logo-blackred-white' ? 'none' : 'initial'};
  }
`;

export const HeaderContainerS = styled.header`
  top: 0;
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 99;
  transition: transform 0.35s linear;
  &.scrolled {
    background: #fff;
    padding-top: 5px;
    padding-bottom: 5px;
    h1 img:first-child {
      display: initial;
    }
    h1 img:last-child {
      display: none;
    }
    a {
      color: #000;
    }
  }
  @media (${media.large}) {
    display: block;
    transition: background 0.35s;
    padding-top: 20px;
    padding-bottom: 20px;
    background: transparent;
  }
`;
export const LangSwitcherIconS = styled.img`
  width: 27px;
  margin-top: 4px;
`;
