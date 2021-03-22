import React from 'react';
import Video from '../../assets/movie.mp4';

import Button from '../Button';
import {
  BanerMovieContainerS,
  BanerVideoS,
} from '../../styles/BanerMovieStyles';
import { SliderOverlayS } from '../../styles/HelpersStyles';
import { SliderBtnWrapperS, SliderTextS } from '../../styles/SliderStyles';

const BanerMovie = ({ title, buttonsTitles, buttonsLinks }) => (
  <BanerMovieContainerS>
    <BanerVideoS autoPlay muted loop>
      <source src={Video} type="video/mp4" />
      <track />
    </BanerVideoS>
    {title && <SliderTextS>{title}</SliderTextS>}
    {buttonsLinks && (
      <SliderBtnWrapperS>
        <Button
          to={buttonsLinks[0]}
          elSize="medium"
          elMargin="10px 20px"
          elWidth="170px"
        >
          {buttonsTitles[0]}
        </Button>
        <Button
          to={buttonsLinks[1]}
          elType="inverted"
          elSize="medium"
          elMargin="10px 20px"
          elWidth="170px"
        >
          {buttonsTitles[1]}
        </Button>
      </SliderBtnWrapperS>
    )}
    <SliderOverlayS opacity={0.7} />
  </BanerMovieContainerS>
);

export default BanerMovie;
