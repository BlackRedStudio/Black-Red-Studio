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
export const TechnologiesListViewportS = styled.div`
  overflow: hidden;
`;
export const TechnologiesListWrapperS = styled.div`
  display: flex;
  align-items: center;
`;
export const TechnologyItemS = styled.div`
  position: relative;
  min-width: 20%;
  width: 20%;
  cursor: pointer;
  text-align: center;
  padding-top: 30px;
`;
export const TechnologyImageS = styled.img`
  height: 140px;
  max-width: 80%;
`;
