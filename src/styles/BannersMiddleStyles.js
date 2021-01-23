import styled from 'styled-components';
import Img from 'gatsby-image';

import { media, vars } from './styles-utils';

export const BannersMiddleContainerS = styled.section`
  position: relative;
  ${vars.paddingTopMedium}
  @media(${media.large}) {
    ${vars.paddingTopLarge}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 960px;
    overflow: hidden;
  }
`;
export const BannersMiddleImageS = styled(Img)`
  margin-bottom: 20px;
  display: block;
  object-fit: cover;
  ${({ hiddenMobile }) =>
    hiddenMobile &&
    `
        display: none;
        @media(${media.large}) {
            width: ${({ elWidth }) => elWidth};
            display: block;
        }`}
  @media(${media.small}) {
    max-width: 570px;
    margin: 0 auto 20px;
  }
  @media (${media.large}) {
    max-width: unset;
    width: ${({ elWidth }) => elWidth};
    height: ${({ elHeight }) => elHeight};
  }
`;
export const BannersMiddleTextWrapperS = styled.div`
  z-index: 5;
  position: absolute;
  top: 200px;
  margin: 0 -15px;
  opacity: 0.9;
  padding: 30px;
  background-image: ${vars.linearGradientInverted};
  @media (${media.large}) {
    margin: 0;
    padding: 80px 60px;
    width: 470px;
    right: 198px;
  }
`;
export const BannersMiddleTextS = styled.h3`
  font-size: 2.4rem;
  line-height: 1.3;
  color: #fff;
  @media (${media.large}) {
    font-size: 4.8rem;
    line-height: normal;
  }
`;
