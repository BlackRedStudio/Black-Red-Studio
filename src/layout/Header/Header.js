import React from 'react';
import { Container } from '../../styles/ContainerStyles';
import { HeaderContainer } from '../../styles/HeaderStyles';
import LangSwitcher from './LangSwitcher';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => (
  <HeaderContainer>
    <Container flex>
      <Logo />
      <Nav />
      <LangSwitcher />
    </Container>
  </HeaderContainer>
);
export default Header;
