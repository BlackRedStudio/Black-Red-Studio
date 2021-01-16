import React from 'react';
import { Container } from '../../styles/ContainerStyles';
import { HeaderContainer } from '../../styles/HeaderStyles';
import LangSwitcher from './LangSwitcher';
import Logo from './Logo';
import Nav from './Nav';

const Header = ({ langs }) => (
  <HeaderContainer>
    <Container>
      <Logo />
      <Nav />
      <LangSwitcher langs={langs} />
    </Container>
  </HeaderContainer>
);
export default Header;
