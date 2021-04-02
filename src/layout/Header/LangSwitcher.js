import React, { useContext } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';

import { LangSwitcherLinkS, LangSwitcherIconS } from '../../styles/NavStyles';
import LangContext from '../../contexts/LangContext';
import { languages, defaultLangKey } from '../../utils/language-helper';

const LangSwitcher = () => {
  const currentLang = useContext(LangContext);
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: { title: { regex: "/en-GB|pl-PL/" }, node_locale: { eq: "en" } }
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
      allContentfulOffer {
        group(field: node_locale) {
          edges {
            node {
              slug
            }
          }
          fieldValue
        }
      }
      allContentfulTechnologiesPage {
        group(field: node_locale) {
          edges {
            node {
              technologiesToShow {
                slug
              }
            }
          }
          fieldValue
        }
      }
      allContentfulPortfolio {
        group(field: node_locale) {
          edges {
            node {
              slug
            }
          }
          fieldValue
        }
      }
      allContentfulMenuPosition {
        group(field: node_locale) {
          edges {
            node {
              slug
            }
          }
          fieldValue
        }
      }
      allContentfulSettings {
        group(field: node_locale) {
          edges {
            node {
              categorySlugList
            }
          }
          fieldValue
        }
      }
    }
  `);

  const slugsArr = {};
  const categorySlugsArr = {};
  const categorySlugList = data.allContentfulSettings.group;
  const offer = data.allContentfulOffer.group;
  const technologies = data.allContentfulTechnologiesPage.group;
  const portfolio = data.allContentfulPortfolio.group;
  const menuPosition = data.allContentfulMenuPosition.group;
  // Build slug array grouped by languages
  for (let i = 0; i < offer.length; i++) {
    const langName = offer[i].fieldValue;
    slugsArr[langName] = [
      ...offer[i].edges.map(v => v.node.slug),
      ...technologies[i].edges[0].node.technologiesToShow.map(v => v.slug),
      ...portfolio[i].edges.map(v => v.node.slug),
      ...menuPosition[i].edges.map(v => v.node.slug),
    ];
    categorySlugsArr[langName] =
      categorySlugList[i].edges[0].node.categorySlugList;
  }
  let links = null;
  if (typeof window !== 'undefined') {
    const homeLink = `/${currentLang}/`.replace(`/${defaultLangKey}/`, '/');

    const locationPath = window.location.pathname;
    const currUrlArr = locationPath?.replace(homeLink, '').split('/');
    window.test = homeLink;
    const currLang =
      homeLink === '/' ? defaultLangKey : homeLink.replace(/\//g, '');
    // find index for slug that is indexed for all languages
    const categorySlugIndex = categorySlugsArr[currLang].findIndex(
      slug => slug === currUrlArr[0]
    );
    let slugIndex = null;
    if (currUrlArr[1])
      slugIndex = slugsArr[currLang].findIndex(slug => slug === currUrlArr[1]);
    const langsMenu = languages.map(lang => {
      const langPrefix = lang === defaultLangKey ? '/' : `/${lang}/`;
      const categorySlugLink = categorySlugsArr[lang][categorySlugIndex];
      const slugLink = slugIndex !== null ? slugsArr[lang][slugIndex] : '';
      let link = langPrefix;
      // if is not a homepage
      if (currUrlArr[0] !== '') link += `${categorySlugLink}/${slugLink}`;

      return {
        langKey: lang,
        link,
      };
    });
    const handleLangChange = (link, lang) => {
      const wrapperTopPosition = document.querySelector('.tl-wrapper')
        .scrollTop;
      navigate(link, {
        state: { lang, wrapperTopPosition },
      });
    };
    links = langsMenu.map((lang, index) => {
      const img = data.allContentfulAsset.edges[index].node;
      return currentLang !== lang.langKey ? (
        <LangSwitcherLinkS
          key={lang.langKey}
          onClick={() => handleLangChange(lang.link, currentLang)}
        >
          <LangSwitcherIconS src={img.file.url} alt={img.title} />
        </LangSwitcherLinkS>
      ) : null;
    });
  }
  return <>{links}</>;
};

export default LangSwitcher;
