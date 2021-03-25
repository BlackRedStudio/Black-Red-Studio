import styled from 'styled-components';
import Img from 'gatsby-image';

import { media, vars } from './styles-utils';

export const BanersMiddleContainerS = styled.section`
  position: relative;
  @media (${media.large}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
  }
`;
export const BanersMiddleWrapperS = styled.div`
  @media (${media.toLarge}) {
    display: flex;
    flex-direction: column;
  }
`;
export const BanersMiddleImageS = styled(Img)`
  margin-bottom: 20px;
  display: block;
  object-fit: cover;
  @media (${media.toLarge}) {
    &:nth-child(2) {
      order: 2;
      margin-top: 20px;
      margin-bottom: 0;
    }
  }
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
export const BanersMiddleTextWrapperS = styled.div`
  margin: 0 -15px;
  opacity: 0.9;
  padding: 30px;
  background-image: ${vars.linearGradientInverted};
  @media (${media.large}) {
    z-index: 5;
    top: 150px;
    position: absolute;
    margin: 0;
    padding: 80px 60px;
    width: 470px;
    right: 198px;
  }
`;
export const BanersMiddleTextS = styled.h3`
  font-size: 2.4rem;
  line-height: 1.3;
  color: #fff;
  @media (${media.large}) {
    font-size: 4.8rem;
    line-height: normal;
  }
`;
