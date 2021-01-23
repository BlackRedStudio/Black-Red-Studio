import React from 'react';

import H2 from './H2';
import {
  IntroTextContainerS,
  ListS,
  ListItemS,
} from '../styles/IntroTextStyles';

const IntroText = ({ text }) => (
  <IntroTextContainerS>
    <H2 align="left">{text[0]}</H2>
    <ListS>
      <ListItemS>{text[1]}</ListItemS>
      <ListItemS>{text[2]}</ListItemS>
      <ListItemS>{text[3]}</ListItemS>
    </ListS>
  </IntroTextContainerS>
);

export default IntroText;
