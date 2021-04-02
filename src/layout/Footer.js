import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import LangContext from '../contexts/LangContext';

import { ContainerInnerS, ContainerS } from '../styles/ContainerStyles';
import Modal from '../components/Modal';
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
                modal
              }
              contactFooter {
                fields {
                  htmlData
                }
              }
              modals {
                modalTitle
                modalName
                modalDescription {
                  fields {
                    htmlData
                  }
                }
                modalButton
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
  let footerComponent = null;
  if (typeof window !== 'undefined') {
    const {
      headerList,
      tagsList,
      aboutUsShortDescription: { aboutUsShortDescription },
      links,
      contactFooter: {
        fields: { htmlData },
      },
      modals,
    } = footerForCurrentLang[0].edges[0].node;

    const modalsList = modals.map(modal => {
      const { modalTitle, modalName, modalDescription, modalButton } = modal;
      return (
        <Modal
          key={modalName}
          modalName={modalName}
          modalHeader={modalTitle}
          modalDescription={modalDescription.fields.htmlData}
          modalButton={modalButton}
        />
      );
    });

    const footerTags = tagsList.map(tag => (
      <FooterTagS key={tag} to="/">
        {tag}
      </FooterTagS>
    ));
    const linksList = links.map(link => (
      <p key={link.link}>
        {link.modal ? (
          <Link to="/" className="modal" modal={link.modal}>
            {link.linkTitle}
          </Link>
        ) : (
          <Link to={link.link}>{link.linkTitle}</Link>
        )}
      </p>
    ));

    footerComponent = (
      <>
        <Spacer />
        <ContainerS>
          <ContainerInnerS>
            <FooterBoxS
              width="30%"
              padding="0"
              data-sal="slide-down"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-out-bounce"
            >
              <FooterHeaderS>{headerList[0]}</FooterHeaderS>
              <FooterContentS>{aboutUsShortDescription}</FooterContentS>
            </FooterBoxS>
            <FooterBoxS
              width="40%"
              padding="0 100px 0 40px"
              data-sal="slide-down"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-out-bounce"
            >
              <FooterHeaderS>{headerList[1]}</FooterHeaderS>
              <div>{footerTags}</div>
            </FooterBoxS>
            <FooterBoxS
              width="30%"
              padding="0"
              data-sal="slide-down"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-out-bounce"
            >
              <FooterHeaderS>{headerList[2]}</FooterHeaderS>
              <FooterContentS dangerouslySetInnerHTML={{ __html: htmlData }} />
              <Spacer heightMobile="30px" heightPC="0" />
              <FooterHeaderS marginTop="40px">{headerList[3]}</FooterHeaderS>
              <FooterContentS>{linksList}</FooterContentS>
            </FooterBoxS>
          </ContainerInnerS>
        </ContainerS>
        <Spacer />
        {modalsList}
      </>
    );
  }

  return <FooterContainerS>{footerComponent}</FooterContainerS>;
};

export default Footer;
