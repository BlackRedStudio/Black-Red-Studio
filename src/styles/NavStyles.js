import styled from 'styled-components';
import { Link } from 'gatsby';

import { media, colors } from './styles-utils';

export const NavContainerS = styled.nav`
  @media (${media.large}) {
    display: flex;
    margin-left: 150px;
  }
`;

export const NavLinkS = styled(Link)`
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
