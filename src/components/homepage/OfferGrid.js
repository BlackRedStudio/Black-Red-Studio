import React from 'react';

import Button from '../Button';
import H2 from '../H2';
import {
  OfferGridContainerS,
  OfferListWrapperS,
  OfferItemS,
  OfferImgS,
  OfferTitleS,
  OfferDescriptionS,
} from '../../styles/OfferGridStyles';

const OfferGrid = ({ offer, header }) => {
  const offerList = offer.map((singleOffer) => {
    const {
      contentful_id,
      title,
      shortDescription: { shortDescription },
      image: {
        localFile: { url },
      },
    } = singleOffer;
    return (
      <OfferItemS key={contentful_id}>
        <OfferImgS src={url} />
        <OfferTitleS>{title}</OfferTitleS>
        <OfferDescriptionS>{shortDescription}</OfferDescriptionS>
        <Button>Pełna oferta</Button>
      </OfferItemS>
    );
  });
  return (
    <OfferGridContainerS>
      <H2 preText={header[0]}>{header[1]}</H2>
      <OfferListWrapperS>{offerList}</OfferListWrapperS>
    </OfferGridContainerS>
  );
};

export default OfferGrid;
