import Img from 'gatsby-image';
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
`;

export const SliderBtnWrapperS = styled.div`
  position: absolute;
  top: 70%;
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
  z-index: 2;
  @media (${media.large}) {
    flex-flow: row;
    justify-content: center;
    top: 550px;
  }
`;

export const SliderImageS = styled(Img)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SliderViewportS = styled.section`
  overflow: hidden;
`;

export const SliderSlidesContainerS = styled.div`
  display: flex;
`;
