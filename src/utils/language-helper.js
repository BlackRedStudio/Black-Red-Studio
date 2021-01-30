export const languages = ['en', 'pl'];
export const defaultLangKey = 'en';

// export const setLanguage = () => {

//     let langKey = '';
//     const checkFirstParam = window.navigator.languages ? window.navigator.languages[0] : null;

//     const browserLang = checkFirstParam || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

//     langKey = browserLang.slice(0, 2);

//     langKey = languages.indexOf(langKey) > -1 ? langKey : defaultLangKey;
//     window.sessionStorage.setItem('currentLanguageKey', langKey);
//     console.log(langKey, defaultLangKey)
//     const path = langKey === defaultLangKey ? window.location.pathname : `/${langKey}/${window.location.pathname.replace(`/${langKey}/`, '')}`;

//     return path;
// }
