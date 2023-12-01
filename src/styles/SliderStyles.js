import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { media, colors } from './styles-utils';

export const SliderItemS = styled.div`
  position: relative;
  min-width: 100%;
  cursor: all-scroll;
`;

export const SliderTextS = styled.p`
  font-family: Lora, sans-serif;
  font-size: 3.6rem;
  margin-bottom: 70px;
  color: ${colors.darkRed};
  font-weight: 300;
  position: absolute;
  top: 200px;
  text-align: center;
  width: 100%;
  z-index: 2;
  padding: 0 15px;
  div {
    position: relative;
    display: inline-block;
  }
  @media (${media.medium}) {
    font-size: 8.4rem;
  }
  @media (${media.large}) {
    top: 350px;
  }
  @media (${media.landscape}) {
    top: 100px;
  }
`;

export const SliderBtnWrapperS = styled.div`
  position: absolute;
  top: 70%;
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
  z-index: 2;
  transform: translateY(100px);
  opacity: 0;
  @media (${media.large}) {
    flex-flow: row;
    justify-content: center;
    top: 550px;
  }
  @media (${media.landscape}) {
    top: unset;
    bottom: 20px;
  }
`;

export const SliderImageS = styled(GatsbyImage)`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 632px;
  object-fit: cover;
`;

export const SliderViewportS = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SliderSlidesContainerS = styled.div`
  display: flex;
`;
