import styled from 'styled-components';

import { media, vars } from './styles-utils';

export const IntroTextContainerS = styled.section`
  ${vars.paddingTopMedium}
  @media (${media.large}) {
    ${vars.paddingTopLarge}
    display: flex;
    align-items: center;
  }
`;

export const ListS = styled.ul`
  padding-left: 20px;
  width: 60%;
`;

export const ListItemS = styled.li`
  margin-bottom: 12px;
  line-height: 2.2rem;
  @media (${media.large}) {
    font-size: 1.8rem;
  }
`;
