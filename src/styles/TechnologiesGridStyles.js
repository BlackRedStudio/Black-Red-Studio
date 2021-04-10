import styled from 'styled-components';

import { media } from './styles-utils';

export const TechnologiesWrapperS = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(3, 1fr);
  @media (${media.small}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (${media.medium}) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media (${media.large}) {
    grid-template-columns: repeat(10, 1fr);
  }
`;
export const TechnologiesItemImageS = styled.img`
  width: 100%;
  transition: 0.35s;
  max-height: 100px;
  object-fit: contain;
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
