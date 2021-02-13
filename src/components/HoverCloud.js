import React from 'react';

import {
  CloudWrapperS,
  CloudTitleS,
  CloudDescS,
} from '../styles/HoverCloudStyles';

const HoverCloud = ({ title, desc }) => (
  <CloudWrapperS>
    <CloudTitleS>{title}</CloudTitleS>
    <CloudDescS>{desc}</CloudDescS>
  </CloudWrapperS>
);

HoverCloud.defaultProps = {
  title: 'No title',
  desc: '',
};

export default HoverCloud;
