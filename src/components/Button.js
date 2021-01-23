import React from 'react';
import { Link } from 'gatsby';

import { ButtonS } from '../styles/ButtonStyles';

const Button = ({ children, to, elType, elSize, elWidth, elMargin }) => (
  <ButtonS
    elType={elType}
    elSize={elSize}
    elWidth={elWidth}
    elMargin={elMargin}
  >
    <Link to={to}>{children}</Link>
  </ButtonS>
);

Button.defaultProps = {
  to: '/',
  elType: 'primary',
  elSize: 'small',
  elWidth: 'initial',
  elMargin: '15px 0 0 0',
};

export default Button;
