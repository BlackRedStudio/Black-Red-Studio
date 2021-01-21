import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getCurrentLangKey } from 'ptz-i18n';
import 'normalize.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/lora/500.css';
import '@fontsource/lora/700.css';

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

  return (
    <LangContext.Provider value={langKey}>
      <GlobalStyle />
      <Header siteTitle={title || `Title`} />
      <main>{children}</main>
      <footer>asdasd</footer>
    </LangContext.Provider>
  );
};

export default Layout;
