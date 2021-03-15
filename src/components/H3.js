import React from 'react';
import { H3S } from '../styles/HeadersStyles';

const H3 = ({ children, align, color, marginBottom }) => (
  <H3S align={align} color={color} marginBottom={marginBottom}>
    {children}
  </H3S>
);

H3.defaultProps = {
  align: 'center',
  color: null,
  marginBottom: '30px',
};

export default H3;
