import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from './styles-utils';

export const TechnologiesContainerS = styled.section`
  text-align: center;
`;
export const TechnologiesListViewportS = styled.div`
  overflow: hidden;
`;
export const TechnologiesListWrapperS = styled.div`
  display: flex;
  align-items: center;
`;
export const TechnologyItemS = styled(Link)`
  position: relative;
  min-width: 33.33%;
  width: 33.33%;
  cursor: pointer;
  text-align: center;
  @media (${media.large}) {
    padding-top: 30px;
    min-width: 20%;
    width: 20%;
  }
`;
export const TechnologyImageS = styled.img`
  height: 140px;
  max-width: 80%;
`;
