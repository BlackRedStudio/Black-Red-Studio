import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import 'normalize.css';

import Header from './Header/Header';
import LangContext from '../contexts/LangContext';
import { GlobalStyle } from '../styles/GlobalStyles';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          languages
          defaultLangKey
        }
      }
    }
  `);

  const url = window.location.pathname;
  const { title, languages, defaultLangKey } = data.site.siteMetadata;
  const langKey = getCurrentLangKey(languages, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(
    languages,
    langKey,
    getUrlForLang(homeLink, url)
  ).map((item) => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey}/`, '/'),
  }));
  return (
    <LangContext.Provider value={langKey}>
      <GlobalStyle />
      <Header langs={langsMenu} siteTitle={title || `Title`} />
      <main>{children}</main>
      <footer>asdasd</footer>
    </LangContext.Provider>
  );
};

export default Layout;
