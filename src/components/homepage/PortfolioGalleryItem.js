import React, { useContext } from 'react';
import Img from 'gatsby-image';

import LangContext from '../../contexts/LangContext';
import {
  PortfolioItemS,
  PortfolioItemImageWrapperS,
  PortfolioHiddenDescS,
} from '../../styles/PortfolioGalleryStyles';

const PortfolioGalleryItem = ({ portfolio, delay }) => {
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
    <PortfolioItemS
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-delay={delay}
      data-sal-easing="ease-out-bounce"
    >
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
