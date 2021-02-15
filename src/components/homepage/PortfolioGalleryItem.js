import React from 'react';

import Img from 'gatsby-image';

import {
  PortfolioItemS,
  PortfolioItemImageWrapperS,
  PortfolioHiddenDescS,
} from '../../styles/PortfolioGalleryStyles';

const PortfolioGalleryItem = ({ portfolio }) => {
  const {
    title,
    shortDescription: { shortDescription },
    images,
  } = portfolio;

  const {
    localFile: {
      childImageSharp: { fluid },
    },
  } = images[0];

  return (
    <PortfolioItemS>
      <PortfolioItemImageWrapperS to="/">
        <Img fluid={fluid} alt={title} />
        <PortfolioHiddenDescS>
          <p>
            <strong>{title}</strong>
          </p>
          {shortDescription}
        </PortfolioHiddenDescS>
      </PortfolioItemImageWrapperS>
    </PortfolioItemS>
  );
};

export default PortfolioGalleryItem;
