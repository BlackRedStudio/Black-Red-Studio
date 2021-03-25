import React, { useContext, forwardRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LangContext from '../../contexts/LangContext';
import LangSwitcher from './LangSwitcher';
import { NavContainerS, NavLinkS } from '../../styles/NavStyles';

const Nav = forwardRef((props, ref) => {
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

  const menuForCurrentLang = data.allContentfulSettings.group.filter(
    ({ fieldValue }) => fieldValue === currentLang
  );
  let site = 'default';
  site =
    window.location.pathname === '/' || window.location.pathname === '/pl/'
      ? 'homepage'
      : 'default';
  const menuList = menuForCurrentLang[0].edges[0].node.mainMenu.map(
    ({ node_locale, contentful_id, slug, title }) => {
      const locale = node_locale;
      const localePrefix = locale !== 'en' ? `${locale}/` : ``;

      return (
        <NavLinkS
          key={contentful_id}
          to={`/${localePrefix}${slug}`}
          site={site}
          swipe
          direction="left"
          preventScrollJump
          entryOffset={100}
          duration={2}
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
