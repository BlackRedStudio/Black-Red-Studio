import styled from 'styled-components';

import { media, colors } from './styles-utils';

export const TechnologiesWrapperS = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  @media (${media.small}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (${media.medium}) {
    grid-template-columns: repeat(7, 1fr);
    grid-gap: ${p => p.$templateAlt ? '50px' : '30px'};
  }
  @media (${media.large}) {
    grid-template-columns: repeat(10, 1fr);
  }
`;
export const TechnologiesHeaderS = styled.div`
  grid-column: 1/5;
  font-size: 2.4rem;
  margin-top: 2rem;
  @media (${media.small}) {
    grid-column: 1/6
  }
  @media (${media.medium}) {
    grid-column: 1/8
  }
  @media (${media.large}) {
    grid-column: 1/11
  }
`;
export const TechnologiesItemImageS = styled.img`
  width: 100%;
  transition: 0.35s;
  max-height: 100px;
  object-fit: contain;
`;
export const TechnologiesSearchS = styled.input`
  width: 100%;
  font-size: 1.4rem;
  border: 1px solid #fff;
  padding: 12px 20px;
  margin-top: 10px;
  resize: none;
  background: #fff;
  border-color: ${colors.lightGrayAlt};
  color: #000;
  margin-bottom: 35px;
  max-width: 300px;
  @media (${media.medium}) {
    font-size: 1.6rem;
  }
`;
export const TechnologiesItemS = styled.div`
  a {
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
      ${TechnologiesItemImageS} {
        transform: translateY(-20px);
      }
    }
  }
`;
