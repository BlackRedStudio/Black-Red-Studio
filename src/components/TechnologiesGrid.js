import React, { Fragment, useContext, useState } from 'react';

import LangContext from '../contexts/LangContext';
import H2 from './H2';
import H3 from './H3';
import {
  TechnologiesHeaderS,
  TechnologiesSearchS,
  TechnologiesWrapperS,
} from '../styles/TechnologiesGridStyles';

import TechnologiesGridItem from './TechnologiesGridItem';
import { technologyTypes } from '../utils/config';

const TechnologiesGrid = ({ technologies, header, smallHeader, search }) => {
  const currentLang = useContext(LangContext);
  const extraUrl = currentLang === 'pl' ? '/pl/technologie/' : '/technologies/';

  const [phrase, setPhrase] = useState(null);

  const searchTechnology = (title, tags, type) => {
    let isVisible = false;

    if (phrase === null || phrase.length < 2) {
      isVisible = true;
    }

    if (phrase !== null) {
      if (
        phrase.length >= 3 &&
        title.toLowerCase().indexOf(phrase.toLowerCase()) > -1
      ) {
        isVisible = true;
      } else if (
        phrase.length >= 2 &&
        tags?.indexOf(phrase.toLowerCase()) > -1
      ) {
        isVisible = true;
      } else if (
        phrase.length >= 3 &&
        type?.toLowerCase().indexOf(phrase.toLowerCase()) > -1
      ) {
        isVisible = true;
      }
    }

    return isVisible;
  };

  let prevType = '';

  const technologiesListItems = technologies.map(technology => {
    const {
      contentful_id,
      title,
      slug,
      tags,
      type,
      image: {
        localFile: { url },
      },
    } = technology;

    const typeTranslated = type ? technologyTypes[type][currentLang] : null;

    const isVisible = searchTechnology(title, tags, typeTranslated);
    const showHeader = type !== prevType;
    if (isVisible) {
      prevType = type;
      return (
        <Fragment key={contentful_id}>
          {!smallHeader && showHeader && (
            <TechnologiesHeaderS>{typeTranslated}</TechnologiesHeaderS>
          )}
          <TechnologiesGridItem
            slug={slug}
            url={url}
            phrase={phrase}
            extraUrl={extraUrl}
            title={title}
          />
        </Fragment>
      );
    }

    return null;
  });

  return (
    <section>
      {smallHeader
        ? header && <H3>{header}</H3>
        : header && <H2 preText={header[0]}>{header[1]}</H2>}
      {search && (
        <TechnologiesSearchS
          type="text"
          placeholder={search}
          $templateAlt
          onChange={e => setPhrase(e.target.value)}
        />
      )}
      <TechnologiesWrapperS $templateAlt={smallHeader}>{technologiesListItems}</TechnologiesWrapperS>
    </section>
  );
};

export default TechnologiesGrid;
