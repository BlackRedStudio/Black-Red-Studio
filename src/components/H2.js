import React from 'react';
import { H2S, PreHeaderS } from '../styles/HeadersStyles';

const H2 = ({ children, preText, align, color, marginBottom, noSal }) => (
  <div
    data-sal={noSal ? `none` : `slide-down-big`}
    data-sal-duration="1000"
    data-sal-delay="600"
    data-sal-easing="ease-out-bounce"
  >
    {preText && <PreHeaderS $color={color}>{preText}</PreHeaderS>}
    <H2S $align={align} $color={color} $marginBottom={marginBottom}>
      {children}
    </H2S>
  </div>
);

H2.defaultProps = {
  align: 'center',
  color: null,
  marginBottom: '30px',
};

export default H2;
