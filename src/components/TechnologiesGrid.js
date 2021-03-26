import React, { useContext } from 'react';

import LangContext from '../contexts/LangContext';
import PaintDrip from '../utils/paint-drip-transition';
import H2 from './H2';
import H3 from './H3';
import {
  TechnologiesItemS,
  TechnologiesWrapperS,
  TechnologiesItemImageS,
} from '../styles/TechnologiesGridStyles';

const TechnologiesGrid = ({ technologies, header, smallHeader }) => {
  const currentLang = useContext(LangContext);
  const extraUrl = currentLang === 'pl' ? '/pl/technologie/' : '/technologies/';
  const technologiesList = technologies.map(technology => {
    const {
      contentful_id,
      title,
      slug,
      image: {
        localFile: { url },
      },
    } = technology;
    return (
      <TechnologiesItemS key={contentful_id}>
        <PaintDrip to={extraUrl + slug} paintDrip hex="#fc3031">
          <TechnologiesItemImageS src={url} alt={title} />
        </PaintDrip>
      </TechnologiesItemS>
    );
  });
  return (
    <section>
      {smallHeader
        ? header && <H3>{header}</H3>
        : header && <H2 preText={header[0]}>{header[1]}</H2>}
      <TechnologiesWrapperS>{technologiesList}</TechnologiesWrapperS>
    </section>
  );
};

export default TechnologiesGrid;
