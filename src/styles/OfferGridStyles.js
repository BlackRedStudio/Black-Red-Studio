import styled from 'styled-components';

import { media } from './styles-utils';

export const OfferListWrapperS = styled.div`
  text-align: center;
  @media (${media.small}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }
`;
export const OfferItemS = styled.div`
  margin-top: 40px;
`;
export const OfferImgS = styled.img`
  max-width: 70px;
  @media (${media.small}) {
    height: 70px;
  }
`;
export const OfferTitleS = styled.h3`
  font-family: Raleway, sans-serif;
  padding: 15px 0 5px;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.8rem;
  margin-top: 0;
  @media (${media.large}) {
    font-size: 2rem;
  }
`;
export const OfferDescriptionS = styled.p`
  @media (${media.small}) {
    height: 120px;
  }
  @media (${media.large}) {
    height: 70px;
  }
`;
