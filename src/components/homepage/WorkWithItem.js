import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

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
      localFile: {url},
    },
    image: {
      localFile: {
        childImageSharp: { gatsbyImageData },
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
        <GatsbyImage image={gatsbyImageData} alt={title} />
      </WorkWithOverlayS>
    </WorkWithItemS>
  );
};

export default WorkWithItem;
