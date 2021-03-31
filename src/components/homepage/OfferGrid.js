import React, { useContext } from 'react';

import LangContext from '../../contexts/LangContext';
import Button from '../Button';
import H2 from '../H2';
import H3 from '../H3';
import {
  OfferListWrapperS,
  OfferItemS,
  OfferImgS,
  OfferTitleS,
  OfferDescriptionS,
} from '../../styles/OfferGridStyles';

const OfferGrid = ({ offer, header, offerButton, smallHeader }) => {
  const currentLang = useContext(LangContext);
  const extraUrl = currentLang === 'pl' ? '/pl/oferta/' : '/offer/';
  let offerDelayMultiplier = 0;

  const offerList = offer.map(singleOffer => {
    const {
      contentful_id,
      title,
      slug,
      shortDescription: { shortDescription },
      image: {
        localFile: { url },
      },
    } = singleOffer;

    let delay = offerDelayMultiplier * 200 + 300;
    offerDelayMultiplier++;
    if (offerDelayMultiplier % 3 === 0) offerDelayMultiplier = 0;

    if (window.innerWidth < 768) delay = 300;

    return (
      <OfferItemS
        key={contentful_id}
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-delay={delay}
        data-sal-easing="ease-out-bounce"
      >
        <OfferImgS src={url} />
        <OfferTitleS>{title}</OfferTitleS>
        <OfferDescriptionS>{shortDescription}</OfferDescriptionS>
        <Button to={extraUrl + slug}>{offerButton}</Button>
      </OfferItemS>
    );
  });
  return (
    <section>
      {smallHeader
        ? header && <H3>{header}</H3>
        : header && <H2 preText={header[0]}>{header[1]}</H2>}
      <OfferListWrapperS>{offerList}</OfferListWrapperS>
    </section>
  );
};

export default OfferGrid;
