import styled from 'styled-components';

import { media } from './styles-utils';

export const SliderItemContainer = styled.div`
  position: relative;
  height: 100vh;
  min-width: 100%;
  cursor: all-scroll;
`;

export const SliderTextContainer = styled.p`
  font-family: Lora, sans-serif;
  font-size: 4rem;
  margin-bottom: 70px;
  color: #fff;
  font-weight: 300;
  position: absolute;
  top: 200px;
  text-align: center;
  width: 100%;
  z-index: 2;
  @media (${media.medium}) {
    font-size: 8.4rem;
  }
  @media (${media.large}) {
    top: 350px;
  }
`;

export const SliderBtnWrapperContainer = styled.div`
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

export const SliderOverlayContainer = styled.div`
  background-image: linear-gradient(
    -40deg,
    #ff362e 0,
    #f11a3a 49%,
    #e60647 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;
export const SliderImageContainer = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SliderViewportContainer = styled.div`
  overflow: hidden;
`;

export const SliderSlidesContainer = styled.div`
  display: flex;
`;
