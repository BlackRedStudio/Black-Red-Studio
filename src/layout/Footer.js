import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import LangContext from '../contexts/LangContext';

import { ContainerInnerS, ContainerS } from '../styles/ContainerStyles';
import {
  FooterContainerS,
  FooterBoxS,
  FooterContentS,
  FooterHeaderS,
  FooterTagS,
} from '../styles/FooterStyles';
import { Spacer } from '../styles/HelpersStyles';

const Footer = () => {
  const currentLang = useContext(LangContext);
  const data = useStaticQuery(graphql`
    query {
      allContentfulFooter {
        group(field: node_locale) {
          edges {
            node {
              headerList
              tagsList
              aboutUsShortDescription {
                aboutUsShortDescription
              }
              links {
                link
                linkTitle
              }
              contactFooter {
                fields {
                  htmlData
                }
              }
            }
          }
          fieldValue
        }
      }
    }
  `);
  const footerForCurrentLang = data.allContentfulFooter.group.filter(
    ({ fieldValue }) => fieldValue === currentLang
  );
  const {
    headerList,
    tagsList,
    aboutUsShortDescription: { aboutUsShortDescription },
    links,
    contactFooter: {
      fields: { htmlData },
    },
  } = footerForCurrentLang[0].edges[0].node;
  const footerTags = tagsList.map((tag) => (
    <FooterTagS key={tag} to="/">
      {tag}
    </FooterTagS>
  ));
  const linksList = links.map((link) => (
    <p key={link.link}>
      <Link to={link.link}>{link.linkTitle}</Link>
    </p>
  ));
  return (
    <FooterContainerS>
      <Spacer />
      <ContainerS>
        <ContainerInnerS>
          <FooterBoxS width="30%" padding="0">
            <FooterHeaderS>{headerList[0]}</FooterHeaderS>
            <FooterContentS>{aboutUsShortDescription}</FooterContentS>
          </FooterBoxS>
          <FooterBoxS width="40%" padding="0 100px 0 40px">
            <FooterHeaderS>{headerList[1]}</FooterHeaderS>
            <div>{footerTags}</div>
          </FooterBoxS>
          <FooterBoxS width="30%" padding="0">
            <FooterHeaderS>{headerList[2]}</FooterHeaderS>
            <FooterContentS dangerouslySetInnerHTML={{ __html: htmlData }} />
            <FooterHeaderS marginTop="40px">{headerList[3]}</FooterHeaderS>
            <FooterContentS>{linksList}</FooterContentS>
          </FooterBoxS>
        </ContainerInnerS>
      </ContainerS>
      <Spacer />
    </FooterContainerS>
  );
};

export default Footer;
