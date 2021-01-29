import React, { useContext } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { getLangs, getUrlForLang } from 'ptz-i18n';

import { LangSwitcherImageContainerS } from '../../styles/LangSwitcherStyles';
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
      allContentfulTechnologies {
        group(field: node_locale) {
          edges {
            node {
              slug
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
      site {
        siteMetadata {
          languages
          defaultLangKey
        }
      }
    }
  `);

  const slugsArr = {};
  const categorySlugsArr = {};
  const categorySlugList = data.allContentfulSettings.group;
  const offer = data.allContentfulOffer.group;
  const technologies = data.allContentfulOffer.group;
  const portfolio = data.allContentfulOffer.group;
  const menuPosition = data.allContentfulOffer.group;

  // Build slug array grouped by languages
  for (let i = 0; i < offer.length; i++) {
    const langName = offer[i].fieldValue;
    slugsArr[langName] = [
      ...offer[i].edges.map((v) => v.node.slug),
      ...technologies[i].edges.map((v) => v.node.slug),
      ...portfolio[i].edges.map((v) => v.node.slug),
      ...menuPosition[i].edges.map((v) => v.node.slug),
    ];
    categorySlugsArr[langName] =
      categorySlugList[i].edges[0].node.categorySlugList;
  }

  const url = window.location.pathname;
  const { languages, defaultLangKey } = data.site.siteMetadata;
  const homeLink = `/${currentLang}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(
    languages,
    currentLang,
    getUrlForLang(homeLink, url)
  ).map((item) => ({
    ...item,
    link: item.langKey === defaultLangKey ? `/` : `/${item.langKey}/`,
  }));

  const links = langsMenu.map((lang, index) => {
    const img = data.allContentfulAsset.edges[index].node;
    return currentLang !== lang.langKey ? (
      <Link to={lang.link} key={lang.langKey}>
        <LangSwitcherImageContainerS src={img.file.url} alt={img.title} />
      </Link>
    ) : null;
  });
  return <>{links}</>;
};

export default LangSwitcher;
