import React, { useRef } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Hamburger from './Hamburger';
import { ContainerS } from '../../styles/ContainerStyles';
import { HeaderContainerS } from '../../styles/HeaderStyles';

const Header = () => {
  const navRef = useRef(null);
  return (
    <HeaderContainerS>
      <ContainerS flex>
        <Logo />
        <Hamburger navRef={navRef} />
        <Nav ref={navRef} />
      </ContainerS>
    </HeaderContainerS>
  );
};
export default Header;
