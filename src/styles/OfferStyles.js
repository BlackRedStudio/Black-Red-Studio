import Img from 'gatsby-image';
import styled from 'styled-components';

export const ImageS = styled(Img)`
  width: 100%;
  height: 100%;
`;
export const IconS = styled.div`
  max-width: ${p => p.maxWidth || `250px`};
  ${p => p.height && `height: ${p.height};`}
  display: block;
  margin: 0 auto 20px;
`;
