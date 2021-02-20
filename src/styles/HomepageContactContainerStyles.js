import styled from 'styled-components';
import Img from 'gatsby-image';

import { media, vars } from './styles-utils';

export const HomepageContactContainerS = styled.div`
  position: relative;
  ${vars.paddingTopMedium}
  ${vars.paddingBottomMedium}
    @media (${media.large}) {
    ${vars.paddingTopLarge}
    ${vars.paddingBottomLarge}
  }
`;

export const BackgroundImageS = styled(Img)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const HomepageContactOverlayS = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  z-index: -1;
  background-image: ${vars.linearGradientAlt};
`;
