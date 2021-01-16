import React from 'react';
import { NavContainer, NavLinkContainer } from '../../styles/NavStyles';

const Nav = () => (
  <NavContainer>
    <NavLinkContainer to="/">Strona Główna</NavLinkContainer>
    <NavLinkContainer to="/">Oferta</NavLinkContainer>
    <NavLinkContainer to="/">Portfolio</NavLinkContainer>
    <NavLinkContainer to="/">Technologie</NavLinkContainer>
    <NavLinkContainer to="/">Kontakt</NavLinkContainer>
  </NavContainer>
);

export default Nav;
