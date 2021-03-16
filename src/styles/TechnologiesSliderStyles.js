import { Link } from 'gatsby';
import styled from 'styled-components';

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
