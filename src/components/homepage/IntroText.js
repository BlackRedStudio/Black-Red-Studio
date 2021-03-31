import React from 'react';

import H2 from '../H2';
import {
  IntroTextContainerS,
  ListS,
  ListItemS,
} from '../../styles/IntroTextStyles';

const IntroText = ({ text }) => (
  <IntroTextContainerS>
    <div
      data-sal="slide-right"
      data-sal-duration="1500"
      data-sal-easing="ease-out-bounce"
    >
      <H2
        align="left"
        data-sal="slide-right"
        data-sal-duration="1500"
        data-sal-easing="ease-out-bounce"
        noSal
      >
        {text[0]}
      </H2>
    </div>
    <ListS
      data-sal="slide-left"
      data-sal-duration="1500"
      data-sal-easing="ease-out-bounce"
    >
      <ListItemS>{text[1]}</ListItemS>
      <ListItemS>{text[2]}</ListItemS>
      <ListItemS>{text[3]}</ListItemS>
    </ListS>
  </IntroTextContainerS>
);

export default IntroText;
