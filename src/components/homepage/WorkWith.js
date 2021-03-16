import React from 'react';

import H2 from '../H2';
import WorkWithItem from './WorkWithItem';

const WorkWith = ({ workWith, header }) => {
  const workWithList = workWith.map((singleWorkWith) => (
    <WorkWithItem
      key={singleWorkWith.contentful_id}
      workWith={singleWorkWith}
    />
  ));

  return (
    <section>
      <H2 preText={header[0]}>{header[1]}</H2>
      <div>{workWithList}</div>
    </section>
  );
};

export default WorkWith;
