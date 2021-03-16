import React, { useRef } from 'react';

import { useEmblaCarousel } from 'embla-carousel/react';

import H2 from '../H2';
import sliderAutoplayHook from '../../utils/slider-autoplay-hook';
import TechnologyItem from './TechnologyItem';

import {
  TechnologiesListWrapperS,
  TechnologiesListViewportS,
} from '../../styles/TechnologiesSliderStyles';

const TechnologiesSlider = ({ header, technologies }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    speed: 5,
    slidesToScroll: 3,
    align: 'start',
  });
  const elRef = useRef(null);

  sliderAutoplayHook(emblaApi, elRef);

  const technologiesList = technologies.map((technology) => (
    <TechnologyItem key={technology.contentful_id} technology={technology} />
  ));
  return (
    <section>
      <H2 preText={header[0]}>{header[1]}</H2>
      <div ref={elRef}>
        <TechnologiesListViewportS ref={emblaRef}>
          <TechnologiesListWrapperS>
            {technologiesList}
          </TechnologiesListWrapperS>
        </TechnologiesListViewportS>
      </div>
    </section>
  );
};

export default TechnologiesSlider;
