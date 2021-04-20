import React, { useContext, useState } from 'react';

import LangContext from '../contexts/LangContext';
import PaintDrip from '../utils/paint-drip-transition';
import H2 from './H2';
import H3 from './H3';
import {
  TechnologiesItemS,
  TechnologiesWrapperS,
  TechnologiesSearchS,
  TechnologiesItemImageS,
} from '../styles/TechnologiesGridStyles';

const TechnologiesGrid = ({ technologies, header, smallHeader, search }) => {
  const currentLang = useContext(LangContext);
  const extraUrl = currentLang === 'pl' ? '/pl/technologie/' : '/technologies/';

  const [phrase, setPhrase] = useState('');

  const technologiesList = technologies.map(technology => {
    const {
      contentful_id,
      title,
      slug,
      image: {
        localFile: { url },
      },
    } = technology;

    let isVisible = true;
    if (
      title.toLowerCase().search(phrase.toLowerCase()) === -1 &&
      phrase.length > 2
    ) {
      isVisible = false;
    }
    return (
      isVisible && (
        <TechnologiesItemS
          key={contentful_id}
          data-sal={phrase.length === '' && `zoom-in`}
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease-out-bounce"
        >
          <PaintDrip to={extraUrl + slug} paintDrip hex="#fc3031">
            <TechnologiesItemImageS src={url} alt={title} />
          </PaintDrip>
        </TechnologiesItemS>
      )
    );
  });
  return (
    <section>
      {smallHeader
        ? header && <H3>{header}</H3>
        : header && <H2 preText={header[0]}>{header[1]}</H2>}
      {search && (
        <TechnologiesSearchS
          type="text"
          onChange={e => setPhrase(e.target.value)}
        />
      )}
      <TechnologiesWrapperS>{technologiesList}</TechnologiesWrapperS>
    </section>
  );
};

export default TechnologiesGrid;
