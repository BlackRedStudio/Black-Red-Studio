import styled from 'styled-components';
import ExLink from '../components/ExLink';

import { media } from './styles-utils';

export const LogoLinkContainer = styled(ExLink)`
  display: block;
`;

export const LogoContainer = styled.img`
  height: 62px;
  width: 220px;
  position: relative;
  top: 5px;
  transition: 0.35s linear;
  pointer-events: none;
  display: ${({ logoTitle }) =>
    logoTitle === 'logo-blackred-white' ? 'none' : 'initial'};
  &:hover {
    opacity: 0.8;
  }
  @media (${media.large}) {
    display: ${({ logoTitle }) =>
      logoTitle !== 'logo-blackred-white' ? 'none' : 'initial'};
  }
`;
