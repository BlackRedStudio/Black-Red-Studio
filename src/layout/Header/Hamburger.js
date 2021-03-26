import React, { forwardRef } from 'react';
import { HamburgerS } from '../../styles/HeaderStyles';

const Hamburger = forwardRef(({ navRef }, ref) => {
  const handleClick = () => {
    ref.current.classList.toggle('active');
    navRef.current.classList.toggle('active');
  };

  return (
    <HamburgerS ref={ref} onClick={() => handleClick()}>
      <div />
      <div />
      <div />
    </HamburgerS>
  );
});

Hamburger.displayName = 'Hamburger';

export default Hamburger;
