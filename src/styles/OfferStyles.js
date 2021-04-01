import Img from 'gatsby-image';
import styled from 'styled-components';

export const ImageS = styled(Img)`
  width: 100%;
  height: 100%;
`;
export const IconWrapperS = styled.div`
  min-height: ${p => p.minHeight || `250px`};
  width: 100%;
  margin-bottom: 20px;
`;
export const IconS = styled.img`
  max-width: ${p => p.maxWidth || `250px`};
  display: block;
  margin: 0 auto;
  animation: opacity-in 0.5s ease-in;
`;
