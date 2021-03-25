import React, { useRef } from 'react';
import { HamburgerS } from '../../styles/HeaderStyles';

const Hamburger = ({ navRef }) => {
  const hamburgerRef = useRef(null);

  const handleClick = () => {
    hamburgerRef.current.classList.toggle('active');
    navRef.current.classList.toggle('active');
  };

  return (
    <HamburgerS ref={hamburgerRef} onClick={() => handleClick()}>
      <div />
      <div />
      <div />
    </HamburgerS>
  );
};

export default Hamburger;
