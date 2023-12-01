import React from 'react';

import useEmblaCarousel from 'embla-carousel-react'

import sliderAutoplayHook from '../../utils/slider-autoplay-hook';

import {
  SliderTextS,
  SliderBtnWrapperS,
  SliderImageS,
  SliderItemS,
  SliderViewportS,
  SliderSlidesContainerS,
} from '../../styles/SliderStyles';
import { SliderOverlayS } from '../../styles/HelpersStyles';
import Button from '../Button';

const Slider = ({ baners, buttonsTitles, buttonsLinks, noOverlay }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 5 });

  sliderAutoplayHook(emblaApi);

  const slides = baners.map(({ contentful_id, title, localFile }) => (
    <SliderItemS key={contentful_id}>
      <SliderImageS image={localFile.childImageSharp.gatsbyImageData} alt={title || ''} />
      {!noOverlay && <SliderOverlayS />}
      {title && <SliderTextS>{title}</SliderTextS>}
      {buttonsLinks && (
        <SliderBtnWrapperS>
          <Button
            to={buttonsLinks[0]}
            elType="white"
            elSize="medium"
            elMargin="10px 20px"
            elWidth="170px"
          >
            {buttonsTitles[0]}
          </Button>
          <Button
            to={buttonsLinks[1]}
            elType="whiteFilled"
            elSize="medium"
            elMargin="10px 20px"
            elWidth="170px"
          >
            {buttonsTitles[1]}
          </Button>
        </SliderBtnWrapperS>
      )}
    </SliderItemS>
  ));

  return (
    <SliderViewportS ref={emblaRef}>
      <SliderSlidesContainerS>{slides}</SliderSlidesContainerS>
    </SliderViewportS>
  );
};

export default Slider;
