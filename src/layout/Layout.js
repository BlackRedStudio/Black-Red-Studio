import React from 'react';
import 'normalize.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/lora/500.css';
import '@fontsource/lora/700.css';
import Header from './Header/Header';
import LangContext from '../contexts/LangContext';
import { GlobalStyle } from '../styles/GlobalStyles';
import { defaultLangKey, languages } from '../utils/language-helper';

const Layout = ({ children }) => {
  let pathNameArr = null;
  let langKey = null;
  if (typeof window !== 'undefined') {
    pathNameArr = window.location.pathname.split('/');
    langKey =
      languages.indexOf(pathNameArr[1]) > -1 ? pathNameArr[1] : defaultLangKey;
  }
  return (
    <LangContext.Provider value={langKey}>
      <GlobalStyle />
      <Header />
      {children}
    </LangContext.Provider>
  );
};

export default Layout;
