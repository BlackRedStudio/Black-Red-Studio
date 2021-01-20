import React from 'react';

import { ButtonContainer } from '../styles/ButtonStyles';

const Button = ({ children, to, type, size, fullWidth, margin }) => (
  <ButtonContainer
    to={to}
    type={type}
    size={size}
    fullWidth={fullWidth}
    margin={margin}
  >
    {children}
  </ButtonContainer>
);

Button.defaultProps = {
  to: '/',
  type: 'primary',
  size: 'small',
  fullWidth: false,
  margin: '15px 0 0 0',
};

export default Button;
