import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import Video from '../../assets/movie.mp4';
import Button from '../Button';
import {
  BanerMovieContainerS,
  BanerVideoS,
} from '../../styles/BanerMovieStyles';
import { SliderOverlayS } from '../../styles/HelpersStyles';
import { SliderBtnWrapperS, SliderTextS } from '../../styles/SliderStyles';

const BanerMovie = ({ title, buttonsTitles, buttonsLinks }) => {
  const sliderTextRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const words = ['Jakość', 'Profesjonalizm', 'Perfekcja'];

    setTimeout(() => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        ease: 'power2.inOut',
        repeat: -1,
      });
      const masterTl = gsap.timeline({ repeat: -1 });

      words.forEach(word => {
        const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
        tl.to(sliderTextRef.current, { duration: 1, text: word });
        masterTl.add(tl);
      });
    }, 1000);
  }, []);

  return (
    <BanerMovieContainerS>
      <BanerVideoS autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        <track />
      </BanerVideoS>
      {title && (
        <SliderTextS>
          <span ref={sliderTextRef} />
          <span ref={cursorRef}>_</span>
        </SliderTextS>
      )}
      {buttonsLinks && (
        <SliderBtnWrapperS>
          <Button
            to={buttonsLinks[0]}
            elSize="medium"
            elMargin="10px 20px"
            elMobileWidth="170px"
            elWidth="170px"
          >
            {buttonsTitles[0]}
          </Button>
          <Button
            to={buttonsLinks[1]}
            elType="inverted"
            elSize="medium"
            elMargin="10px 20px"
            elMobileWidth="170px"
            elWidth="170px"
          >
            {buttonsTitles[1]}
          </Button>
        </SliderBtnWrapperS>
      )}
      <SliderOverlayS opacity={0.7} />
    </BanerMovieContainerS>
  );
};

export default BanerMovie;
