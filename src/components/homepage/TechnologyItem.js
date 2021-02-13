import React, { useState } from 'react';

import HoverCloud from '../HoverCloud';

import {
  TechnologyItemS,
  TechnologyImageS,
} from '../../styles/TechnologiesSliderStyles';

const TechnologyItem = ({ technology }) => {
  const [open, setOpen] = useState(false);

  const {
    title,
    shortDescription: { shortDescription },
    logo: {
      localFile: { url },
    },
  } = technology;
  return (
    <TechnologyItemS
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {open && <HoverCloud title={title} desc={shortDescription} />}
      <TechnologyImageS src={url} alt={title} />
    </TechnologyItemS>
  );
};

export default TechnologyItem;
