import React, { useEffect, useContext, forwardRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LangContext from '../../contexts/LangContext';
import LangSwitcher from './LangSwitcher';
import { NavContainerS, NavLinkS } from '../../styles/NavStyles';
import { swipe } from '../../utils/swipe-transition';

const Nav = forwardRef(({ hamburgerRef }, ref) => {
  const currentLang = useContext(LangContext);
  const data = useStaticQuery(graphql`
    query {
      allContentfulSettings {
        group(field: node_locale) {
          edges {
            node {
              mainMenu {
                contentful_id
                title
                slug
                node_locale
              }
            }
          }
          fieldValue
        }
      }
    }
  `);
  useEffect(() => {
    ref.current.classList.remove('active');
    hamburgerRef.current.classList.remove('active');
  });

  const menuForCurrentLang = data.allContentfulSettings.group.filter(
    ({ fieldValue }) => fieldValue === currentLang
  );
  let site = 'default';
  site =
    window.location.pathname === '/' || window.location.pathname === '/pl/'
      ? 'homepage'
      : 'default';

  const menuList = menuForCurrentLang[0].edges[0].node.mainMenu.map(
    ({ node_locale, contentful_id, slug, title }, key) => {
      const locale = node_locale;
      const localePrefix = locale !== 'en' ? `${locale}/` : ``;

      // Transition properties
      const top = 'exit';
      const exitLength = 2;
      const entryLength = exitLength / 3.5;
      const entryZ = top === 'entry' ? 1 : 0;
      const exitZ = top === 'exit' ? 1 : 0;
      const entryOffset = 100;

      let direction = 'left';

      return (
        <NavLinkS
          key={contentful_id}
          to={`/${localePrefix}${slug}`}
          site={site}
          data-index={key}
          onMouseOver={e => {
            const currentIndex = document.querySelector('.nav-link-active')
              ?.dataset?.index;
            if (currentIndex) {
              const { index } = e.target.dataset;
              direction = index < currentIndex ? 'right' : 'left';
            }
          }}
          preventScrollJump
          partiallyActive
          activeClassName="nav-link-active"
          exit={{
            length: exitLength,
            trigger: ({ node, exit }) =>
              swipe({
                node,
                exit,
                direction,
                top,
                entryOffset,
                triggerName: 'exit',
              }),
            zIndex: exitZ,
          }}
          entry={{
            length: entryLength,
            trigger: ({ node, exit }) => {
              ref.current.classList.add('transition');
              setTimeout(() => {
                ref.current.classList.remove('transition');
              }, exitLength * 1000);
              return swipe({
                node,
                exit,
                direction,
                top,
                entryOffset,
                triggerName: 'entry',
              });
            },
            zIndex: entryZ,
          }}
        >
          {title}
        </NavLinkS>
      );
    }
  );

  return (
    <NavContainerS ref={ref}>
      {menuList}
      <LangSwitcher />
    </NavContainerS>
  );
});

Nav.displayName = 'Nav';

export default Nav;
