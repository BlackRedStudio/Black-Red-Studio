import React, { useContext } from 'react';

import LangContext from '../contexts/LangContext';
import {
  SiblingsArrowS,
  SiblingsImageS,
  SiblingsSwitcherS,
  SiblingsTitleS,
} from '../styles/SiblingsSwitcherStyles';

const SiblingsSwitcher = ({ prevSibling, nextSibling, type }) => {
  const currentLang = useContext(LangContext);
  let extraUrl = null;
  if (type === 'offer')
    extraUrl = currentLang === 'pl' ? '/pl/oferta/' : '/offer/';
  else if (type === 'portfolio')
    extraUrl = currentLang === 'pl' ? '/pl/portfolio/' : '/portfolio/';
  else if (type === 'technologies')
    extraUrl = currentLang === 'pl' ? '/pl/technologie/' : '/technologies/';

  const {
    title: prevTitle,
    slug: prevSlug,
    image: {
      localFile: { url: prevImage },
    },
  } = prevSibling;
  const {
    title: nextTitle,
    slug: nextSlug,
    image: {
      localFile: { url: nextImage },
    },
  } = nextSibling;
  return (
    <>
      <SiblingsArrowS />
      <SiblingsSwitcherS to={extraUrl + prevSlug}>
        <SiblingsTitleS>{prevTitle}</SiblingsTitleS>
        <SiblingsImageS src={prevImage} alt={prevTitle} />
      </SiblingsSwitcherS>
      <SiblingsArrowS next="true" />
      <SiblingsSwitcherS to={extraUrl + nextSlug} next="true">
        <SiblingsTitleS>{nextTitle}</SiblingsTitleS>
        <SiblingsImageS src={nextImage} alt={nextTitle} />
      </SiblingsSwitcherS>
    </>
  );
};

export default SiblingsSwitcher;
