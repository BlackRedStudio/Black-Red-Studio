import styled from 'styled-components';

export const WorkWithIconS = styled.img`
  position: relative;
  z-index: 3;
  width: 40px;
  pointer-events: none;
  filter: brightness(0);
`;
export const WorkWithTitleS = styled.div`
  position: relative;
  z-index: 3;
  font-size: 1.8rem;
  font-weight: 700;
  pointer-events: none;
  margin-top: 30px;
`;
export const WorkWithOverlayS = styled.div`
  background: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
  transition: ease-in-out 0.45s;
  img {
    z-index: 1;
    opacity: 0.5 !important;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;
export const WorkWithItemS = styled.div`
  padding: 40px 20px;
  border-style: solid;
  border-color: #e6e6e6;
  border-width: 0 1px 1px 1px;
  text-align: center;
  position: relative;
  background: #f8f8f8;
  background-size: cover;
  overflow: hidden;
  max-width: 320px;
  margin: 0 auto;
  height: 200px;
  &:first-child {
    border-width: 1px 1px 1px 1px;
  }
  &:last-child {
    border-width: 0 1px 1px 1px;
  }
  &:hover ${WorkWithOverlayS} {
    opacity: 1;
  }
  &:hover ${WorkWithIconS} {
    filter: brightness(1);
  }
  &:hover ${WorkWithTitleS} {
    color: #fff;
  }
`;
