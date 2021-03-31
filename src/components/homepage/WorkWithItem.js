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
    <WorkWithItemS
      data-sal="slide-left"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease-out-bounce"
    >
      <WorkWithIconS src={url} alt={title} />
      <WorkWithTitleS>{title}</WorkWithTitleS>
      <WorkWithOverlayS>
        <Img fluid={fluid} alt={title} />
      </WorkWithOverlayS>
    </WorkWithItemS>
  );
};

export default WorkWithItem;
