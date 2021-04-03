import Img from 'gatsby-image';
import styled from 'styled-components';

import { media } from './styles-utils';

export const ImageS = styled(Img)`
  @media (${media.toLarge}) {
    max-height: 350px;
  }
  width: 100%;
  height: 100%;
`;
export const LogoWrapperS = styled.div`
  min-height: 150px;
  width: 100%;
  margin-bottom: 20px;
`;
export const OfferImageWrapperS = styled.div`
  @media (${media.toLarge}) {
    padding-top: 300px;
  }
  width: 100%;
`;
export const IconWrapperS = styled.div`
  min-height: 250px;
  width: 100%;
  margin-bottom: 20px;
  position: absolute;
  top: calc(50vh + 50px);
  @media (${media.medium}) {
    position: initial;
  }
`;
export const IconS = styled.img`
  max-width: ${p => p.maxWidth || `250px`};
  display: block;
  margin: 0 auto;
  min-width: 150px;
  animation: opacity-in 0.5s ease-in;
`;
export const IframeWrapperS = styled.div`
  width: 100%;
`;
