import React from 'react';
import { Link } from 'gatsby';

import { ButtonS } from '../styles/ButtonStyles';

const Button = ({
  children,
  to,
  elType,
  elSize,
  elWidth,
  elMargin,
  isLink,
  type,
}) => (
  <ButtonS
    elType={elType}
    elSize={elSize}
    elWidth={elWidth}
    elMargin={elMargin}
  >
    {isLink ? (
      <Link to={to}>{children}</Link>
    ) : (
      <button type={type === 'submit' ? 'submit' : 'button'}>{children}</button>
    )}
  </ButtonS>
);

Button.defaultProps = {
  to: '/',
  elType: 'primary',
  elSize: 'small',
  elWidth: 'initial',
  elMargin: '15px 0 0 0',
  isLink: true,
  type: null,
};

export default Button;
