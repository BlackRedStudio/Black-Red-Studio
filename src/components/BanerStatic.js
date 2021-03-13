import React from 'react';
import {
  BanerStaticS,
  CollisionBoxS,
  ScrollDownWrapperS,
  ArrowsS,
} from '../styles/BanerStaticStyles';
import smoothVerticalScrolling from '../utils/smoth-scroll';

const BanerStatic = () => {
  const ScrollDown = () => {
    smoothVerticalScrolling(window.innerHeight, 500);
  };
  return (
    <BanerStaticS>
      <p>Chciałbyś posiadać własną stronę internetową?</p>
      <h2>Sprawdź naszą ofertę!</h2>
      <CollisionBoxS onClick={() => ScrollDown()}>
        <ScrollDownWrapperS>
          <ArrowsS />
        </ScrollDownWrapperS>
      </CollisionBoxS>
    </BanerStaticS>
  );
};

export default BanerStatic;
