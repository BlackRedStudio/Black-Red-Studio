import React, { useEffect, useRef } from 'react';
import { ContainerS } from '../../styles/ContainerStyles';
import { HeaderContainerS } from '../../styles/HeaderStyles';
import LangSwitcher from './LangSwitcher';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  const headerRef = useRef(null);

  const checkScrollPosition = (body) => {
    if (body[0].scrollTop > window.innerHeight)
      headerRef.current.classList.add('scrolled');
    else headerRef.current.classList.remove('scrolled');
  };

  useEffect(() => {
    const body = document.getElementsByTagName('html');
    checkScrollPosition(body);
    window.addEventListener('scroll', () => {
      checkScrollPosition(body);
    });
  });
  return (
    <HeaderContainerS ref={headerRef}>
      <ContainerS flex>
        <Logo />
        <Nav />
        <LangSwitcher />
      </ContainerS>
    </HeaderContainerS>
  );
};
export default Header;
