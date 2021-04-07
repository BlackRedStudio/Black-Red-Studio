import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import Video from '../../assets/movie.mp4';
import VideoSmall from '../../assets/movie-small.mp4';
import Button from '../Button';
import {
  BanerMovieContainerS,
  BanerVideoS,
} from '../../styles/BanerMovieStyles';
import { SliderOverlayS } from '../../styles/HelpersStyles';
import { SliderBtnWrapperS, SliderTextS } from '../../styles/SliderStyles';

const BanerMovie = ({ headers, buttonsTitles, buttonsLinks }) => {
  const sliderTextRef = useRef(null);
  const cursorRef = useRef(null);
  const sliderBtnWrapperRef = useRef(null);
  const mainVideo = useRef(null);

  useEffect(() => {
    const videoType = window.innerWidth > 991 ? Video : VideoSmall;
    const source = `<source src="${videoType}" type="video/mp4" />`;
    mainVideo.current.insertAdjacentHTML('afterbegin', source);

    gsap.registerPlugin(TextPlugin);

    setTimeout(() => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        ease: 'power2.inOut',
        repeat: -1,
      });

      gsap.to(sliderBtnWrapperRef.current, { opacity: 1, y: 0, duration: 1 });

      const masterTl = gsap.timeline({ repeat: -1 });
      headers.forEach(header => {
        const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
        tl.to(sliderTextRef.current, { duration: 1, text: header });
        masterTl.add(tl);
      });
    }, 1000);
  }, []);

  return (
    <BanerMovieContainerS>
      <BanerVideoS autoPlay muted loop playsInline ref={mainVideo}>
        <track />
      </BanerVideoS>
      {headers && (
        <SliderTextS>
          <span ref={sliderTextRef} />
          <span ref={cursorRef}>_</span>
        </SliderTextS>
      )}
      {buttonsLinks && (
        <SliderBtnWrapperS ref={sliderBtnWrapperRef}>
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
