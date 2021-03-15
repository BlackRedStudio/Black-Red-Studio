import React from 'react';

import H2 from '../H2';
import Button from '../Button';
import PortfolioGalleryItem from './PortfolioGalleryItem';

import {
  PortfolioContainerS,
  PortfolioItemWrapperS,
} from '../../styles/PortfolioGalleryStyles';
import H3 from '../H3';

const PortfolioGallery = ({ portfolio, header, button, smallHeader }) => {
  const PortfolioList = portfolio.map((singlePortfolio) => (
    <PortfolioGalleryItem
      key={singlePortfolio.contentful_id}
      portfolio={singlePortfolio}
    />
  ));

  return (
    <PortfolioContainerS>
      {header && smallHeader ? (
        <H3>{header}</H3>
      ) : (
        <H2 preText={header[0]}>{header[1]}</H2>
      )}
      <PortfolioItemWrapperS>{PortfolioList}</PortfolioItemWrapperS>
      {button && (
        <Button
          to={button[1]}
          elSize="big"
          elWidth="25%"
          elMargin="30px auto 0"
        >
          {button[0]}
        </Button>
      )}
    </PortfolioContainerS>
  );
};

export default PortfolioGallery;
