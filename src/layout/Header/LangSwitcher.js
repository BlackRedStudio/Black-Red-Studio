import React, { useContext } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { LangSwitcherImageContainer } from '../../styles/LangSwitcherStyles';
import LangContext from '../../contexts/LangContext';

const LangSwitcher = ({ langs }) => {
  const currentLang = useContext(LangContext);

  const data = useStaticQuery(graphql`
    {
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
    }
  `);
  const links = langs.map((lang, index) => {
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
