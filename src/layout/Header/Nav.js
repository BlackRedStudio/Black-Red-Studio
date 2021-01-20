import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { NavContainer, NavLinkContainer } from '../../styles/NavStyles';
import LangContext from '../../contexts/LangContext';

const Nav = () => {
  const currentLang = useContext(LangContext);
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuPosition {
        group(field: node_locale) {
          edges {
            node {
              link
              title
              contentful_id
              node_locale
            }
          }
          fieldValue
        }
      }
    }
  `);

  const menuForCurrentLang = data.allContentfulMenuPosition.group.filter(
    ({ fieldValue }) => fieldValue === currentLang
  );

  const menuList = menuForCurrentLang[0].edges.map(({ node }) => {
    const locale = node.node_locale;
    const localePrefix = locale !== 'en' ? `${locale}/` : ``;
    return (
      <NavLinkContainer
        key={node.contentful_id}
        to={`/${localePrefix}${node.link}`}
      >
        {node.title}
      </NavLinkContainer>
    );
  });

  return <NavContainer>{menuList}</NavContainer>;
};

export default Nav;
