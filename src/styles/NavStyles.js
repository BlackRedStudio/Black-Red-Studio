import styled from 'styled-components';
import { Link } from 'gatsby';

import { media } from './styles-utils';

export const NavContainer = styled.nav`
  @media (${media.large}) {
    display: flex;
  }
`;

export const NavLinkContainer = styled(Link)`
  display: block;
  padding: 10px 20px;
  text-transform: uppercase;
  color: #000;
  font-weight: 800;
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
  @media (${media.large}) {
    color: #fff;
    border: 0;
    letter-spacing: 0.7px;
    transition: 0.35s;
    padding: 20px;
    :hover {
      opacity: 0.8;
      transform: translateY(-7px);
    }
  }
`;
