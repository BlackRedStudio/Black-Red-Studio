import styled from 'styled-components';

import { media } from './styles-utils';

export const OfferListWrapperS = styled.div`
  text-align: center;
  @media (${media.small}) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const OfferItemS = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  @media (${media.small}) {
    width: 400px;
  }
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
  @media (${media.large}) {
    font-size: 2rem;
  }
`;
export const OfferDescriptionS = styled.p`
  @media (${media.small}) {
    height: 70px;
  }
`;
