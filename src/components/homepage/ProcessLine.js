import React from 'react';

import H2 from '../H2';
import ProcessItem from './ProcessItem';

import {
  ProcessContainerWrapperS,
  ProcessContainerS,
  ProcessLineS,
} from '../../styles/ProcessLineStyles';

const ProcessLine = ({ process, header }) => {
  const ProcessList = process.map(singleProcess => (
    <ProcessItem key={singleProcess.contentful_id} process={singleProcess} />
  ));

  return (
    <ProcessContainerWrapperS>
      <H2 preText={header[0]}>{header[1]}</H2>
      <ProcessContainerS>
        <ProcessLineS />
        {ProcessList}
      </ProcessContainerS>
    </ProcessContainerWrapperS>
  );
};

export default ProcessLine;
