import React from 'react';
import { ContainerS } from '../../styles/ContainerStyles';
import { HeaderContainerS } from '../../styles/HeaderStyles';
import LangSwitcher from './LangSwitcher';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => (
  <HeaderContainerS>
    <ContainerS flex>
      <Logo />
      <Nav />
      <LangSwitcher />
    </ContainerS>
  </HeaderContainerS>
);
export default Header;
