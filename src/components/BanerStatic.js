import React, { useEffect, useRef } from 'react';

import {
  BanerStaticS,
  CollisionBoxS,
  ScrollDownWrapperS,
  ArrowsS,
  WaveSvgS,
} from '../styles/BanerStaticStyles';
import smoothVerticalScrolling from '../utils/smoth-scroll';
import wavify from '../utils/wavify';

const BanerStatic = ({ headers, half }) => {
  const waveRef = useRef(null);

  useEffect(() => {
    wavify(waveRef.current, {
      waveHeight: 100,
    });
  }, []);

  const ScrollDown = () => {
    smoothVerticalScrolling(window.innerHeight, 500);
  };
  return (
    <BanerStaticS half={half}>
      {half ? (
        <h2>{headers}</h2>
      ) : (
        <>
          <p>{headers[0]}</p>
          <h2>{headers[1]}</h2>
        </>
      )}
      {!half && (
        <CollisionBoxS onClick={() => ScrollDown()}>
          <ScrollDownWrapperS>
            <ArrowsS />
          </ScrollDownWrapperS>
        </CollisionBoxS>
      )}
      <WaveSvgS
        width="100%"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path ref={waveRef} d="" />
      </WaveSvgS>
    </BanerStaticS>
  );
};

export default BanerStatic;
