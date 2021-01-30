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
  // To Class Components if auto detect browser language
  // constructor(props) {
  //   super(props);

  //   const isCurrKeyLangExist = window.sessionStorage.getItem('currentLanguageKey');
  //   if(!isCurrKeyLangExist) navigate( setLanguage() );
  // }
  // const langKey = window.sessionStorage.getItem('currentLanguageKey');
  const pathNameArr = window.location.pathname.split('/');
  const langKey =
    languages.indexOf(pathNameArr[1]) > -1 ? pathNameArr[1] : defaultLangKey;
  return (
    <LangContext.Provider value={langKey}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <footer>asdasd</footer>
    </LangContext.Provider>
  );
};

export default Layout;
