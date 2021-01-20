import React, { useContext } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { getLangs, getUrlForLang } from 'ptz-i18n';

import { LangSwitcherImageContainer } from '../../styles/LangSwitcherStyles';
import LangContext from '../../contexts/LangContext';

const LangSwitcher = () => {
  const currentLang = useContext(LangContext);
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: { title: { regex: "/en-GB|pl-PL/" } }
        sort: { fields: title, order: ASC }
      ) {
        edges {
          node {
            contentful_id
            title
            file {
              url
            }
          }
        }
      }
      site {
        siteMetadata {
          languages
          defaultLangKey
        }
      }
    }
  `);

  const url = window.location.pathname;
  const { languages, defaultLangKey } = data.site.siteMetadata;
  const homeLink = `/${currentLang}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(
    languages,
    currentLang,
    getUrlForLang(homeLink, url)
  ).map((item) => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey}/`, '/'),
  }));

  const links = langsMenu.map((lang, index) => {
    const img = data.allContentfulAsset.edges[index].node;
    return currentLang !== lang.langKey ? (
      <Link to={lang.link} key={lang.langKey}>
        <LangSwitcherImageContainer src={img.file.url} alt={img.title} />
      </Link>
    ) : null;
  });
  return <>{links}</>;
};

export default LangSwitcher;
