import React, { useContext } from 'react';
import { Link } from 'gatsby';

import LangContext from '../contexts/LangContext';

const ExLink = ({ to, children }) => {
  const currentLang = useContext(LangContext);
  const path = currentLang === 'en' ? to : `/${currentLang}${to}`;
  return <Link to={path}>{children}</Link>;
};

export default ExLink;
