import React, { useRef } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Hamburger from './Hamburger';
import { ContainerS } from '../../styles/ContainerStyles';
import { HeaderContainerS } from '../../styles/HeaderStyles';

const Header = () => {
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  return (
    <HeaderContainerS>
      <ContainerS $flex>
        <Logo />
        <Hamburger ref={hamburgerRef} navRef={navRef} />
        <Nav ref={navRef} hamburgerRef={hamburgerRef} />
      </ContainerS>
    </HeaderContainerS>
  );
};
export default Header;
