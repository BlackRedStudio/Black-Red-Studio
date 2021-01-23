import styled from 'styled-components';
import { Link } from 'gatsby';

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
