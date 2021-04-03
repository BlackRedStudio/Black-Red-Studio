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
    <PortfolioInfoItemS
      key={infoHeaders[k]}
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease-out-bounce"
    >
      <PortfolioInfoIconS
        src={infoIcons[k].localFile.url}
        alt={infoHeaders[k]}
      />
      <PortfolioInfoTextS>
        <span>{infoHeaders[k]}</span>
        {k === 0 ? (
          <a
            href={`https://${infoContents[k]}`}
            target="_blank"
            rel="noreferrer"
          >
            {infoContents[k]}
          </a>
        ) : (
          <span>{infoContents[k]}</span>
        )}
      </PortfolioInfoTextS>
    </PortfolioInfoItemS>
  ));
  return (
    <div>
      <H3>{aboveInfoHeadersText}</H3>
      <PortfolioInfoWrapperS>{infoHeadersList}</PortfolioInfoWrapperS>
    </div>
  );
};

export default PortfolioInfo;
