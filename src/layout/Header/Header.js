import React, { useEffect } from 'react';
import { ContainerS } from '../../styles/ContainerStyles';
import { HeaderContainerS } from '../../styles/HeaderStyles';
import LangSwitcher from './LangSwitcher';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  const checkScrollPosition = (body, header) => {
    if (body[0].scrollTop > window.innerHeight)
      header[0].classList.add('scrolled');
    else header[0].classList.remove('scrolled');
  };

  useEffect(() => {
    const body = document.getElementsByTagName('html');
    const header = document.getElementsByTagName('header');
    checkScrollPosition(body, header);
    window.addEventListener('scroll', () => {
      checkScrollPosition(body, header);
    });
  }, []);

  return (
    <HeaderContainerS>
      <ContainerS flex>
        <Logo />
        <Nav />
        <LangSwitcher />
      </ContainerS>
    </HeaderContainerS>
  );
};
export default Header;
