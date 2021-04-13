import styled from 'styled-components';

import { media, colors } from './styles-utils';

export const PortfolioInfoWrapperS = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
`;
export const PortfolioInfoItemS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
  @media (${media.large}) {
    width: 25%;
    border-right: 1px solid ${colors.darkGray};
    justify-content: center;
    margin-bottom: 0;
  }
  &:last-child {
    border: 0;
  }
`;
export const PortfolioInfoTextS = styled.div`
  padding-left: 15px;
  span {
    color: ${colors.lightBlack};
    display: block;
  }
  span:nth-child(2) {
    color: ${colors.lightRed};
    margin-top: 7px;
  }
  a {
    word-wrap: break-all;
    display: block;
    margin-top: 7px;
  }
`;
export const PortfolioInfoIconS = styled.img`
  width: 50px;
`;
