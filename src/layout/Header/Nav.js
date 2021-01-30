import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { NavContainerS, NavLinkS } from '../../styles/NavStyles';
import LangContext from '../../contexts/LangContext';

const Nav = () => {
  const currentLang = useContext(LangContext);
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuPosition {
        group(field: node_locale) {
          edges {
            node {
              contentful_id
              title
              slug
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
      <NavLinkS key={node.contentful_id} to={`/${localePrefix}${node.slug}`}>
        {node.title}
      </NavLinkS>
    );
  });

  return <NavContainerS>{menuList}</NavContainerS>;
};

export default Nav;
