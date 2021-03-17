import React from 'react';
import { Iframe } from '../styles/HomepageContactStyles';

const Map = () => (
  <div>
    <Iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4992.562481292643!2d22.602146!3d51.269142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472250cc1d8ec51f%3A0x1f95d2cc5b08bad9!2sTrze%C5%9Bniowska%2061%2C%2020-227%20Lublin!5e0!3m2!1spl!2spl!4v1615980149903!5m2!1spl!2spl"
      width="100%"
      height="450"
      allowFullScreen
      loading="lazy"
      title="map"
    />
  </div>
);

export default Map;
