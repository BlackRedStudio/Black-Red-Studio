import React, { useContext } from 'react';

import LangContext from '../contexts/LangContext';

import { swipe } from '../utils/swipe-transition';
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

  // Transition properties
  const top = 'exit';
  const exitLength = 2;
  const entryLength = exitLength / 3.5;
  const entryZ = top === 'entry' ? 1 : 0;
  const exitZ = top === 'exit' ? 1 : 0;
  const entryOffset = 100;

  return (
    <>
      <SiblingsArrowS onClick={e => e.target.nextElementSibling.click()} />
      <SiblingsSwitcherS
        to={extraUrl + prevSlug}
        preventScrollJump
        exit={{
          length: exitLength,
          trigger: ({ node, exit }) =>
            swipe({
              node,
              exit,
              direction: 'right',
              top,
              entryOffset,
              triggerName: 'exit',
            }),
          zIndex: exitZ,
        }}
        entry={{
          length: entryLength,
          trigger: ({ node, exit }) => {
            document.querySelector('nav').classList.add('transition');
            setTimeout(() => {
              document.querySelector('nav').classList.remove('transition');
            }, exitLength * 1000);
            return swipe({
              node,
              exit,
              direction: 'right',
              top,
              entryOffset,
              triggerName: 'entry',
            });
          },
          zIndex: entryZ,
        }}
      >
        <SiblingsTitleS>{prevTitle}</SiblingsTitleS>
        <SiblingsImageS src={prevImage} alt={prevTitle} />
      </SiblingsSwitcherS>
      <SiblingsArrowS
        next="true"
        onClick={e => e.target.previousElementSibling.click()}
      />
      <SiblingsSwitcherS
        to={extraUrl + nextSlug}
        next="true"
        preventScrollJump
        exit={{
          length: exitLength,
          trigger: ({ node, exit }) =>
            swipe({
              node,
              exit,
              direction: 'left',
              top,
              entryOffset,
              triggerName: 'exit',
            }),
          zIndex: exitZ,
        }}
        entry={{
          length: entryLength,
          trigger: ({ node, exit }) => {
            document.querySelector('nav').classList.add('transition');
            setTimeout(() => {
              document.querySelector('nav').classList.remove('transition');
            }, exitLength * 1000);
            return swipe({
              node,
              exit,
              direction: 'left',
              top,
              entryOffset,
              triggerName: 'entry',
            });
          },
          zIndex: entryZ,
        }}
      >
        <SiblingsTitleS>{nextTitle}</SiblingsTitleS>
        <SiblingsImageS src={nextImage} alt={nextTitle} />
      </SiblingsSwitcherS>
    </>
  );
};

export default SiblingsSwitcher;
