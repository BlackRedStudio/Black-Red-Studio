import React, { useContext } from 'react';

import LangContext from '../../contexts/LangContext';
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
  const currentLang = useContext(LangContext);
  const offerList = offer.map((singleOffer) => {
    const {
      contentful_id,
      title,
      slug,
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
        {currentLang === 'en' ? (
          <Button to={`offer/${slug}`}>Pełna oferta</Button>
        ) : (
          <Button to={`oferta/${slug}`}>Pełna oferta</Button>
        )}
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
