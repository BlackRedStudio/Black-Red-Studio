import React from 'react';
import Img from 'gatsby-image';

import {
  WorkWithItemS,
  WorkWithTitleS,
  WorkWithOverlayS,
  WorkWithIconS,
} from '../../styles/WorkWithStyles';

const WorkWithItem = ({ workWith }) => {
  const {
    title,
    icon: {
      localFile: { url },
    },
    image: {
      localFile: {
        childImageSharp: { fluid },
      },
    },
  } = workWith;

  return (
    <WorkWithItemS>
      <WorkWithIconS src={url} alt={title} />
      <WorkWithTitleS>{title}</WorkWithTitleS>
      <WorkWithOverlayS>
        <Img fluid={fluid} alt={title} />
      </WorkWithOverlayS>
    </WorkWithItemS>
  );
};

export default WorkWithItem;
