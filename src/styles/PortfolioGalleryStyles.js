import styled from 'styled-components';
import { Link } from 'gatsby';

import { media, vars } from './styles-utils';

export const PortfolioContainerS = styled.div`
  text-align: center;
  ${vars.paddingTopMedium}
  ${vars.paddingBottomMedium}
    @media(${media.large}) {
    ${vars.paddingTopLarge}
    ${vars.paddingBottomLarge}
  }
`;
export const PortfolioItemWrapperS = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const PortfolioItemS = styled.div`
  width: 25%;
  padding: 10px;
  perspective: 600px;
`;
export const PortfolioItemImageWrapperS = styled(Link)`
  display: block;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  img {
    backface-visibility: hidden;
  }
  &:hover {
    transform: rotateY(180deg);
  }
`;
export const PortfolioHiddenDescS = styled.div`
  transform: rotateY(180deg);
  backface-visibility: hidden;
  position: absolute;
  background-image: ${vars.linearGradient};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
