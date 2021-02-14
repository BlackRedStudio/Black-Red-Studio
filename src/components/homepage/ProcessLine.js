import React from 'react';

import H2 from '../H2';
import ProcessItem from './ProcessItem';

import {
  ProcessContainerS,
  ProcessLineS,
} from '../../styles/ProcessLineStyles';

const ProcessLine = ({ process, header }) => {
  const ProcessList = process.map((singleProcess) => (
    <ProcessItem key={singleProcess.contentful_id} process={singleProcess} />
  ));

  return (
    <div>
      <H2 preText={header[0]}>{header[1]}</H2>
      <ProcessContainerS>
        <ProcessLineS />
        {ProcessList}
      </ProcessContainerS>
    </div>
  );
};

export default ProcessLine;
