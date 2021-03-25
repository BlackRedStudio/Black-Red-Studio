import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { media, colors } from './styles-utils';

export const NavContainerS = styled.nav`
  @media (${media.toLarge}) {
    width: 100%;
    transition: transform 0.35s linear;
    transform: translateY(-300px);
    background: #fff;
    &.active {
      transform: translateY(0);
    }
  }
  @media (${media.large}) {
    display: flex;
    margin-left: 150px;
  }
`;

export const NavLinkS = styled(AniLink)`
  display: block;
  padding: 10px 20px;
  text-transform: uppercase;
  color: #000;
  font-weight: 800;
  font-size: 2.2rem;
  border-bottom: 1px solid #eee;
  @media (${media.large}) {
    color: #fff;
    border: 0;
    letter-spacing: 0.7px;
    transition: transform 0.35s;
    padding: 20px 15px;
    :hover {
      color: ${p => (p.site === 'homepage' ? colors.darkRed : `#fff`)};
      transform: translateY(-7px);
    }
  }
`;
