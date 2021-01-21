import React from 'react';

import { ButtonContainer } from '../styles/ButtonStyles';

const Button = ({ children, to, type, size, width, margin }) => (
  <ButtonContainer
    to={to}
    type={type}
    size={size}
    width={width}
    margin={margin}
  >
    {children}
  </ButtonContainer>
);

Button.defaultProps = {
  to: '/',
  type: 'primary',
  size: 'small',
  width: 'initial',
  margin: '15px 0 0 0',
};

export default Button;
