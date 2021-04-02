import React from 'react';

import H2 from '../H2';
import H3 from '../H3';
import Button from '../Button';
import PortfolioGalleryItem from './PortfolioGalleryItem';
import {
  PortfolioContainerS,
  PortfolioItemWrapperS,
} from '../../styles/PortfolioGalleryStyles';

const PortfolioGallery = ({ portfolio, header, button, smallHeader }) => {
  let offerDelayMultiplier = 0;

  const PortfolioList = portfolio.map(singlePortfolio => {
    let delay = offerDelayMultiplier * 200 + 300;
    offerDelayMultiplier++;
    if (offerDelayMultiplier % 3 === 0) offerDelayMultiplier = 0;

    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    if (windowWidth < 768) delay = 300;

    return (
      <PortfolioGalleryItem
        key={singlePortfolio.contentful_id}
        portfolio={singlePortfolio}
        delay={delay}
      />
    );
  });

  return (
    <PortfolioContainerS>
      {smallHeader
        ? header && <H3>{header}</H3>
        : header && <H2 preText={header[0]}>{header[1]}</H2>}
      <PortfolioItemWrapperS>{PortfolioList}</PortfolioItemWrapperS>
      {button && (
        <div
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="600"
          data-sal-easing="ease-out-bounce"
        >
          <Button
            to={button[1]}
            elSize="big"
            elWidth="25%"
            elMobileWidth="50%"
            elMargin="30px auto 0"
            mobileMargin="35px 0 0 0"
            mediumMargin="60px 0 0 0"
          >
            {button[0]}
          </Button>
        </div>
      )}
    </PortfolioContainerS>
  );
};

export default PortfolioGallery;
