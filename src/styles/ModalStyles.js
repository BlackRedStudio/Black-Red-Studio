import styled from 'styled-components';

import { media, colors } from './styles-utils';

export const ModalShadowS = styled.div`
  z-index: 80;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.8;
  will-change: opacity;
`;
export const ModalS = styled.div`
  position: fixed;
  border-radius: 4px;
  z-index: 99;
  left: 15px;
  right: 15px;
  max-width: 700px;
  margin: 0 auto;
  top: calc(25vh - 49px);
  overflow-x: hidden;
`;
export const ModalWrapperS = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  transition: transform 0.35s ease-in-out;
`;
export const ModalCloseS = styled.span`
  text-align: right;
  cursor: pointer;
  position: absolute;
  right: 15px;
  font-weight: 700;
`;
export const ModalTitleS = styled.div`
  font-weight: 700;
  font-size: 2.4rem;
  padding: 20px 15px;
  @media (${media.large}) {
    font-size: 3.2rem;
  }
`;
export const ModalContentS = styled.div`
  @media (${media.toLarge}) {
    height: 42vh;
  }
  border-bottom: 1px solid ${colors.darkGray};
  overflow: auto;
  height: 50vh;
  padding: 20px 15px;
  h3 {
    margin-top: 0;
  }
`;
export const DividerS = styled.div`
  text-align: center;
  position: relative;
  &:before {
    content: '';
    height: 0;
    position: absolute;
    margin: 10px 0 0;
    left: 0;
    bottom: 12px;
    width: 100%;
    border-bottom: 1px solid ${colors.darkGray};
  }
  svg {
    background: #fff;
    font-size: 14px !important;
    height: 18px;
    line-height: 1;
    position: relative;
    text-align: center;
    display: inline-block;
    width: 25px;
  }
`;
