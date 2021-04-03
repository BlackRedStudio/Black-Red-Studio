import React from 'react';

import H2 from '../H2';
import WorkWithItem from './WorkWithItem';

import { WorkWithContainerS } from '../../styles/WorkWithStyles';

const WorkWith = ({ workWith, header }) => {
  const workWithList = workWith.map(singleWorkWith => (
    <WorkWithItem
      key={singleWorkWith.contentful_id}
      workWith={singleWorkWith}
    />
  ));

  return (
    <WorkWithContainerS>
      <H2 preText={header[0]}>{header[1]}</H2>
      <div>{workWithList}</div>
    </WorkWithContainerS>
  );
};

export default WorkWith;
