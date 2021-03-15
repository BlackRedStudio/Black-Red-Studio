import React from 'react';
import {
  BanerStaticS,
  CollisionBoxS,
  ScrollDownWrapperS,
  ArrowsS,
} from '../styles/BanerStaticStyles';
import smoothVerticalScrolling from '../utils/smoth-scroll';

const BanerStatic = ({ headers, half }) => {
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
    </BanerStaticS>
  );
};

export default BanerStatic;
