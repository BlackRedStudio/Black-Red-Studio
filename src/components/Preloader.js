import React from 'react';

import { PreloaderS, PreloaderWrapperS } from '../styles/PreloaderStyles';

const Preloader = (top) => (
  <PreloaderWrapperS style={{ position: 'relative' }}>
    <PreloaderS $top={top} />
  </PreloaderWrapperS>
);

Preloader.defaultProps = {
  top: 0,
};

export default Preloader;
