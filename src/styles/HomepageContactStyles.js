import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { media } from './styles-utils';

export const HomepageContactContainerS = styled.section`
  position: relative;
`;

export const BackgroundImageS = styled(GatsbyImage)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const HomepageContactOverlayS = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  z-index: -1;
  background: rgba(0, 0, 0, 0.8);
`;
export const AddressColumnS = styled.div`
  text-align: center;
  color: ${p => (p.$templateAlt ? `#000` : `#fff`)};
  font-size: 1.9rem;
  padding-top: 25px;
  a {
    font-weight: 700;
  }
`;
export const AddressColumnContainerS = styled.div`
  @media (${media.landscape}) {
    transform: translate(0);
    opacity: 1;
  }
`;
export const IframeS = styled.iframe`
  border: 0;
  @media (${media.toLarge}) {
    height: 320px;
  }
  @media (${media.medium}) {
    margin-top: 41px;
    padding: 0 30px;
  }
`;
export const ContactContainerS = styled.div`
  @media (${media.landscape}) {
    transform: translate(0);
    opacity: 1;
  }
`;
