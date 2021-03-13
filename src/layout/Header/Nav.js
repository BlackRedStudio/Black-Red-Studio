import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { NavContainerS, NavLinkS } from '../../styles/NavStyles';
import LangContext from '../../contexts/LangContext';

const Nav = () => {
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
  const menuList = menuForCurrentLang[0].edges[0].node.mainMenu.map(
    ({ node_locale, contentful_id, slug, title }) => {
      const locale = node_locale;
      const localePrefix = locale !== 'en' ? `${locale}/` : ``;
      return (
        <NavLinkS key={contentful_id} to={`/${localePrefix}${slug}`}>
          {title}
        </NavLinkS>
      );
    }
  );

  return <NavContainerS>{menuList}</NavContainerS>;
};

export default Nav;
