import styled from 'styled-components';
import { Link } from 'gatsby';

import { vars } from './styles-utils';

export const PortfolioContainerS = styled.section`
  text-align: center;
`;
export const PortfolioItemWrapperS = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
export const PortfolioItemS = styled.div`
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
