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
  border-right: 1px solid ${colors.darkGray};
  @media (${media.large}) {
    width: 25%;
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
`;
export const PortfolioInfoIconS = styled.img`
  width: 50px;
`;
