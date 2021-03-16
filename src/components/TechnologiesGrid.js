import React, { useContext } from 'react';
import { Link } from 'gatsby';

import LangContext from '../contexts/LangContext';
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
      logo: {
        localFile: { url },
      },
    } = technology;
    return (
      <TechnologiesItemS key={contentful_id}>
        <Link to={extraUrl + slug}>
          <TechnologiesItemImageS src={url} alt={title} />
        </Link>
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
