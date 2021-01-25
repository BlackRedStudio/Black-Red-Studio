import React from 'react';
import { H2S, PreHeaderS } from '../styles/H2Styles';

const H2 = ({ children, preText, align }) => (
  <>
    {preText && <PreHeaderS>{preText}</PreHeaderS>}
    <H2S align={align}>{children}</H2S>
  </>
);

H2.defaultProps = {
  align: 'center',
};

export default H2;
