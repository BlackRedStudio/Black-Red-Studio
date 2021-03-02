import React from 'react';
import { H2S, PreHeaderS } from '../styles/H2Styles';

const H2 = ({ children, preText, align, color, marginBottom }) => (
  <>
    {preText && <PreHeaderS color={color}>{preText}</PreHeaderS>}
    <H2S align={align} color={color} marginBottom={marginBottom}>
      {children}
    </H2S>
  </>
);

H2.defaultProps = {
  align: 'center',
  color: null,
  marginBottom: '30px',
};

export default H2;
