import styled from 'styled-components';

import { media } from './styles-utils';

export const IntroTextContainerS = styled.section`
  @media (${media.large}) {
    display: flex;
    align-items: center;
  }
`;

export const ListS = styled.ul`
  padding-left: 20px;
  @media (${media.large}) {
    width: 60%;
  }
`;

export const ListItemS = styled.li`
  margin-bottom: 12px;
  line-height: 2.2rem;
  @media (${media.large}) {
    font-size: 1.8rem;
  }
`;
