import React, { useRef } from 'react';

import { useEmblaCarousel } from 'embla-carousel/react';

import H2 from '../H2';
import sliderAutoplayHook from '../../utils/slider-autoplay-hook';
import TechnologyItem from './TechnologyItem';

import {
  TechnologiesContainerS,
  TechnologiesListWrapperS,
  TechnologiesListViewportS,
} from '../../styles/TechnologiesSliderStyles';
import Button from '../Button';

const TechnologiesSlider = ({ header, technologies, technologiesButton }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    speed: 5,
    slidesToScroll: 3,
    align: 'start',
  });
  const elRef = useRef(null);

  sliderAutoplayHook(emblaApi, elRef);

  const technologiesList = technologies.map(technology => (
    <TechnologyItem key={technology.contentful_id} technology={technology} />
  ));
  return (
    <TechnologiesContainerS>
      <H2 preText={header[0]}>{header[1]}</H2>
      <div
        ref={elRef}
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      >
        <TechnologiesListViewportS ref={emblaRef}>
          <TechnologiesListWrapperS>
            {technologiesList}
          </TechnologiesListWrapperS>
        </TechnologiesListViewportS>
      </div>
      <div
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-delay="900"
        data-sal-easing="ease-out-bounce"
      >
        <Button
          to={technologiesButton[1]}
          elSize="big"
          elWidth="25%"
          elMargin="70px auto 0"
          mobileMargin="35px 0 0 0"
          mediumMargin="50px 0 0 0"
        >
          {technologiesButton[0]}
        </Button>
      </div>
    </TechnologiesContainerS>
  );
};

export default TechnologiesSlider;
