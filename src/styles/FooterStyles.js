import { Link } from 'gatsby';
import styled from 'styled-components';

import { media, colors } from './styles-utils';

export const FooterContainerS = styled.footer`
  background: #000;
`;
export const FooterBoxS = styled.div`
  @media (${media.large}) {
    padding: ${p => p.$padding};
    width: ${p => p.$width} !important;
  }
`;
export const FooterHeaderS = styled.div`
  font-size: 1.8rem;
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: ${p => p.$marginTop};
`;
export const FooterContentS = styled.div`
  color: ${colors.darkGrayAlt};
  line-height: 2rem;
  letter-spacing: 0.3px;
  p {
    margin-bottom: 0;
  }
  @media (${media.large}) {
    font-size: 1.8rem;
    line-height: normal;
  }
  @supports (-webkit-touch-callout: none) {
    &:last-child {
      padding-bottom: 30px;
    }
  }
`;
export const FooterTagS = styled(Link)`
  border: 1px solid ${colors.darkGrayAlt};
  color: ${colors.darkGrayAlt};
  font-size: 1.4rem;
  line-height: normal;
  margin: 5px;
  padding: 6px 8px;
  transition: all 0.4s ease-in-out;
  display: inline-block;
  &:hover {
    color: #fff;
    border-color: #fff;
  }
`;
