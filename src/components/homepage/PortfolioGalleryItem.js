import React, { useContext } from 'react';
import Img from 'gatsby-image';

import LangContext from '../../contexts/LangContext';
import {
  PortfolioItemS,
  PortfolioItemImageWrapperS,
  PortfolioHiddenDescS,
} from '../../styles/PortfolioGalleryStyles';

const PortfolioGalleryItem = ({ portfolio }) => {
  const currentLang = useContext(LangContext);
  const extraUrl = currentLang === 'pl' ? '/pl/portfolio/' : '/portfolio/';
  const {
    title,
    slug,
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
      <PortfolioItemImageWrapperS to={extraUrl + slug}>
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
