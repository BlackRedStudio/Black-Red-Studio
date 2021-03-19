import React from 'react';
import H3 from './H3';

import {
  PortfolioInfoWrapperS,
  PortfolioInfoItemS,
  PortfolioInfoIconS,
  PortfolioInfoTextS,
} from '../styles/PortfolioInfoStyles';

const PortfolioInfo = ({
  infoIcons,
  infoHeaders,
  infoContents,
  aboveInfoHeadersText,
}) => {
  const infoHeadersList = infoIcons.map((v, k) => (
    <PortfolioInfoItemS key={infoHeaders[k]}>
      <PortfolioInfoIconS
        src={infoIcons[k].localFile.url}
        alt={infoHeaders[k]}
      />
      <PortfolioInfoTextS>
        <span>{infoHeaders[k]}</span>
        <a href={`https://${infoHeaders[k]}`} target="_blank" rel="noreferrer">
          {infoContents[k]}
        </a>
      </PortfolioInfoTextS>
    </PortfolioInfoItemS>
  ));
  return (
    <section>
      <H3>{aboveInfoHeadersText}</H3>
      <PortfolioInfoWrapperS>{infoHeadersList}</PortfolioInfoWrapperS>
    </section>
  );
};

export default PortfolioInfo;
