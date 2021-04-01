import styled from 'styled-components';

import { media } from './styles-utils';

export const ContainerS = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  ${p =>
    p.flex &&
    `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
  `}
  @media (${media.large}) {
    width: 1300px;
    margin: 0 auto;
    ${({ flex }) =>
      flex &&
      `
      flex-wrap: nowrap;
      justify-content: space-between;
    `}
  }
`;

export const ContainerInnerS = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div,
  > section {
    width: 100%;
    padding-top: 70px;
    &:first-child {
      padding-top: 0;
    }
    ${p => {
      if (p.children.length === 2)
        return `
        @media (${media.medium}) {
          width: 50%;
        }
        @media (${media.large}) {
          padding-top: 0;
        }
      `;
      if (p.children.length === 3)
        return `
        @media (${media.medium}) {
          width: 50%;
        }
        @media (${media.large}) {
          padding-top: 0;
          width: 33.33%;
        }
      `;
      return `
        @media (${media.small}) {
          width: 50%;
        }
        @media (${media.medium}) {
          width: 33.33%;
        }
        @media (${media.large}) {
          padding-top: 0;
          width: 25%;
        }
      `;
    }}
  }
`;
export const BoxS = styled.div`
  @media (${media.medium}) {
    font-size: ${p => (p.fontSize ? p.fontSize : `1.6rem`)};
    display: ${p => (p.display ? p.display : `block`)};
    padding: ${p => (p.padding ? p.padding : `0`)};
    align-items: ${p => (p.alignItems ? p.alignItems : `flex-start`)};
    justify-content: ${p =>
      p.justifyContent ? p.justifyContent : `flex-start`};
    letter-spacing: ${p => (p.letterSpacing ? p.letterSpacing : `normal`)};
    line-height: ${p => (p.lineHeight ? p.lineHeight : `normal`)};
    flex-direction: ${p => (p.flexDirection ? p.flexDirection : `row`)};
  }
`;
