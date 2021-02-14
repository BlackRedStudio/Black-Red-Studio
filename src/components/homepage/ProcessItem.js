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
    <ProcessItemS>
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
