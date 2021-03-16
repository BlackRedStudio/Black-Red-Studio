import styled from 'styled-components';

import { media } from './styles-utils';

export const TechnologiesWrapperS = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TechnologiesItemS = styled.div`
  width: 33.33%;
  padding: 15px;
  a {
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media (${media.large}) {
    width: 10%;
  }
`;
export const TechnologiesItemImageS = styled.img`
  width: 100%;
`;
