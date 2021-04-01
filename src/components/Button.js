import React from 'react';

import PaintDrip from '../utils/paint-drip-transition';

import { ButtonS } from '../styles/ButtonStyles';

const Button = ({
  children,
  to,
  elType,
  elSize,
  elWidth,
  elMobileWidth,
  elMargin,
  isLink,
  mobileMargin,
  mediumMargin,
  type,
  click,
}) => (
  <ButtonS
    elType={elType}
    elSize={elSize}
    elMobileWidth={elMobileWidth}
    elWidth={elWidth}
    elMargin={elMargin}
    mobileMargin={mobileMargin}
    mediumMargin={mediumMargin}
  >
    {isLink ? (
      <PaintDrip to={to} paintDrip hex="#fc3031">
        {children}
      </PaintDrip>
    ) : (
      <button type={type === 'submit' ? 'submit' : 'button'} onClick={click}>
        {children}
      </button>
    )}
  </ButtonS>
);

Button.defaultProps = {
  to: '/',
  elType: 'primary',
  elSize: 'small',
  elMobileWidth: 'initial',
  elWidth: 'initial',
  elMargin: '15px 0 0 0',
  mobileMargin: '20px 0 0 0',
  mediumMargin: '20px 0 0 0',
  isLink: true,
  type: null,
};

export default Button;
