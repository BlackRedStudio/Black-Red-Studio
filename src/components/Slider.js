import React, { useEffect } from 'react';

import { useEmblaCarousel } from 'embla-carousel/react';

import {
  SliderTextContainer,
  SliderOverlayContainer,
  SliderBtnWrapperContainer,
  SliderImageContainer,
  SliderItemContainer,
  SliderViewportContainer,
  SliderSlidesContainer,
} from '../styles/SliderStyles';
import Button from './Button';

const Slider = ({ baners }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 5 });

  useEffect(() => {
    if (emblaApi) {
      let banerAutoplay = 0;

      const stop = () => {
        window.clearTimeout(banerAutoplay);
        banerAutoplay = 0;
      };

      const play = () => {
        stop();
        banerAutoplay = window.setTimeout(() => {
          emblaApi.scrollNext();
          play();
        }, 4000);
      };

      play();
      emblaApi.on('select', () => play());
    }
  }, [emblaApi]);

  const slides = baners.map(({ contentful_id, title, file: { url } }) => (
    <SliderItemContainer key={contentful_id} className="glide__slide">
      <SliderImageContainer src={url} alt={title} />
      <SliderOverlayContainer />
      <SliderTextContainer>{title}</SliderTextContainer>
      <SliderBtnWrapperContainer>
        <Button to="/" type="white" size="medium" margin="0 20px">
          Projekty
        </Button>
        <Button to="/" type="whiteFilled" size="medium" margin="0 20px">
          Oferta
        </Button>
      </SliderBtnWrapperContainer>
    </SliderItemContainer>
  ));

  return (
    <SliderViewportContainer ref={emblaRef}>
      <SliderSlidesContainer>{slides}</SliderSlidesContainer>
    </SliderViewportContainer>
  );
};

export default Slider;
