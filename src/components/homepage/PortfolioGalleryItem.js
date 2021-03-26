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
    image,
  } = portfolio;

  const {
    localFile: {
      childImageSharp: { fluid },
    },
  } = image;

  return (
    <PortfolioItemS>
      <PortfolioItemImageWrapperS to={extraUrl + slug} paintDrip hex="#fc3031">
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
