import styled from 'styled-components';

import { media } from './styles-utils';

export const HeaderContainer = styled.header`
  top: 0;
  background: #fff;
  position: fixed;
  width: 100%;
  height: 72px;
  z-index: 99;
  transition: transform 0.35s linear;
  @media (${media.large}) {
    display: block;
    transition: background 0.35s;
    padding-top: 30px;
    background: transparent;
  }
`;
