import React from 'react';
import {
  BanerStaticS,
  CollisionBoxS,
  ScrollDownWrapperS,
  ArrowsS,
} from '../styles/BanerStaticStyles';
import smoothVerticalScrolling from '../utils/smoth-scroll';

const BanerStatic = ({ headers }) => {
  const ScrollDown = () => {
    smoothVerticalScrolling(window.innerHeight, 500);
  };
  return (
    <BanerStaticS>
      <p>{headers[0]}</p>
      <h2>{headers[1]}</h2>
      <CollisionBoxS onClick={() => ScrollDown()}>
        <ScrollDownWrapperS>
          <ArrowsS />
        </ScrollDownWrapperS>
      </CollisionBoxS>
    </BanerStaticS>
  );
};

export default BanerStatic;
