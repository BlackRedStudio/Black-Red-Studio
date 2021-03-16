import React, { useState, useContext } from 'react';

import LangContext from '../../contexts/LangContext';
import HoverCloud from '../HoverCloud';
import {
  TechnologyItemS,
  TechnologyImageS,
} from '../../styles/TechnologiesSliderStyles';

const TechnologyItem = ({ technology }) => {
  const currentLang = useContext(LangContext);
  const extraUrl = currentLang === 'pl' ? '/pl/technologie/' : '/technologies/';
  const [open, setOpen] = useState(false);

  const {
    title,
    slug,
    shortDescription: { shortDescription },
    logo: {
      localFile: { url },
    },
  } = technology;
  return (
    <TechnologyItemS
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      to={extraUrl + slug}
    >
      {open && <HoverCloud title={title} desc={shortDescription} />}
      <TechnologyImageS src={url} alt={title} />
    </TechnologyItemS>
  );
};

export default TechnologyItem;
