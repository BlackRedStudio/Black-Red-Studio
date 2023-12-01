import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  const splitLettersToDivs = element => {
    const el = element;
    const splitted = el.innerHTML.split('</div> ');
    el.innerHTML = '';
    for (let i = 0; i < splitted.length; i++) {
      el.innerHTML += ` <div>${splitted[i]}</div> `;
    }
  };

  useEffect(() => {
    const h2 = h2Ref.current;
    h2.innerHTML = h2.textContent.replace(
      /\S/g,
      "<div class='letter'>$&</div>"
    );

    splitLettersToDivs(h2);

    const p = pRef.current;
    if (p) {
      p.innerHTML = p.textContent.replace(
        /\S/g,
        "<div class='letter-pre-header'>$&</div>"
      );
      splitLettersToDivs(p);
    }

    const letter = document.getElementsByClassName('letter');
    const letterPreHeader = document.getElementsByClassName(
      'letter-pre-header'
    );

    gsap.set([h2, p], { perspective: 400 });
    window.requestAnimationFrame(() =>
      setTimeout(() => {
        gsap.set([h2, p], { opacity: 1 });
        gsap.from(
          letter,
          {
            duration: 1,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: '0% 50% -50',
            ease: 'back',
            stagger: 0.01,
          },
          '+=0'
        );
        gsap.from(
          letterPreHeader,
          { duration: 1.9, opacity: 0, y: -80, ease: 'back', stagger: 0.01 },
          '+=0'
        );
      }, 1000)
    );

    if (window.innerWidth < 768) {
      wavify(waveRef.current, {
        waveHeight: 50,
        waveDelta: 50,
      });
    } else {
      wavify(waveRef.current, {
        waveHeight: 100,
      });
    }
  }, []);

  const ScrollDown = () => {
    smoothVerticalScrolling(window.innerHeight, 500);
  };
  return (
    <BanerStaticS $half={half}>
      {half ? (
        <h2 ref={h2Ref}>{headers}</h2>
      ) : (
        <>
          <p ref={pRef}>{headers[0]}</p>
          <h2 ref={h2Ref}>{headers[1]}</h2>
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
