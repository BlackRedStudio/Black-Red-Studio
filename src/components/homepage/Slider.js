import React, { useEffect } from 'react';

import { useEmblaCarousel } from 'embla-carousel/react';

import {
  SliderTextS,
  SliderOverlayS,
  SliderBtnWrapperS,
  SliderImageS,
  SliderItemS,
  SliderViewportS,
  SliderSlidesContainerS,
} from '../../styles/SliderStyles';
import Button from '../Button';

const Slider = ({ baners, buttonsTitles, buttonsLinks }) => {
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
        window.requestAnimationFrame(() => {
          banerAutoplay = window.setTimeout(() => {
            emblaApi.scrollNext();
            play();
          }, 4000);
        });
      };

      play();
      emblaApi.on('select', () => play());
    }
  }, [emblaApi]);

  const slides = baners.map(({ contentful_id, title, localFile }) => (
    <SliderItemS key={contentful_id} className="glide__slide">
      <SliderImageS fluid={localFile.childImageSharp.fluid} alt={title} />
      <SliderOverlayS />
      <SliderTextS>{title}</SliderTextS>
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
    </SliderItemS>
  ));

  return (
    <SliderViewportS ref={emblaRef}>
      <SliderSlidesContainerS>{slides}</SliderSlidesContainerS>
    </SliderViewportS>
  );
};

export default Slider;
