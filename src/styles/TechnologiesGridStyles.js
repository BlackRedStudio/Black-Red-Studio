import styled from 'styled-components';

import { media } from './styles-utils';

export const TechnologiesWrapperS = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TechnologiesItemImageS = styled.img`
  width: 100%;
  transition: 0.35s;
`;
export const TechnologiesItemS = styled.div`
  width: 33.33%;
  padding: 30px;
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
  @media (${media.large}) {
    width: 10%;
  }
`;
