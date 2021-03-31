import React from 'react';

import {
  ProcessItemS,
  ProcessItemIconS,
  ProcessItemTextS,
  ProcessItemTitleS,
  ProcessItemDescS,
} from '../../styles/ProcessLineStyles';

const ProcessItem = ({ process }) => {
  const {
    title,
    description: { description },
    icon: {
      localFile: { url },
    },
  } = process;

  return (
    <ProcessItemS
      data-sal="zoom-in"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease-out-bounce"
    >
      <ProcessItemIconS>
        <img src={url} alt={title} />
      </ProcessItemIconS>
      <ProcessItemTextS>
        <ProcessItemTitleS>{title}</ProcessItemTitleS>
        <ProcessItemDescS>{description}</ProcessItemDescS>
      </ProcessItemTextS>
    </ProcessItemS>
  );
};

export default ProcessItem;
