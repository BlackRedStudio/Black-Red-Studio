import React from 'react';
import 'normalize.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/lora/500.css';
import '@fontsource/lora/700.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Header from './Header/Header';
import LangContext from '../contexts/LangContext';
import { GlobalStyle } from '../styles/GlobalStyles';
import { defaultLangKey, languages } from '../utils/language-helper';

const Layout = ({ children }) => {
  const pathNameArr = window.location.pathname.split('/');
  const langKey =
    languages.indexOf(pathNameArr[1]) > -1 ? pathNameArr[1] : defaultLangKey;
  return (
    <LangContext.Provider value={langKey}>
      <GoogleReCaptchaProvider reCaptchaKey="6LcciHEaAAAAAKFIB-BLraMM-jUweGiXQLAqKL5W">
        <GlobalStyle />
        <Header />
        {children}
      </GoogleReCaptchaProvider>
    </LangContext.Provider>
  );
};

export default Layout;
