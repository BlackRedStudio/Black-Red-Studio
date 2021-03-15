import styled from 'styled-components';

import { media, vars } from './styles-utils';

export const TechnologiesContainerS = styled.section`
  ${vars.paddingTopMedium}
  ${vars.paddingBottomMedium}
  @media (${media.large}) {
    ${vars.paddingTopLarge}
    ${vars.paddingBottomLarge}
  }
`;
export const TechnologiesWrapperS = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TechnologiesItemS = styled.div`
  width: 33.33%;
  padding: 15px;
  @media (${media.large}) {
    width: 10%;
  }
`;
export const TechnologiesItemImageS = styled.img`
  width: 100%;
`;
