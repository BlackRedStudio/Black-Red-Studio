import styled from 'styled-components';

import { media } from './styles-utils';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  padding: 0;
  @media (${media.large}) {
    width: 1170px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;
