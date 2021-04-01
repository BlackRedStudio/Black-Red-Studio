import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../layout/Seo';
import Footer from '../layout/Footer';
import BanerStatic from '../components/BanerStatic';
import ContactForm from '../components/ContactForm';
import AddressColumn from '../components/AddressColumn';
import Modal from '../components/Modal';
import { ContainerS, ContainerInnerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const Contact = ({ data }) => {
  const { form, messages, addressData } = data.contentfulHomepage;
  const { title, headerMainTitle, modals } = data.contentfulContactPage;

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

  return (
    <>
      <SEO title={title} />
      <BanerStatic headers={headerMainTitle} />
      <ContainerS>
        <Spacer />
        <section>
          <ContainerInnerS>
            <ContactForm form={form} messages={messages} templateAlt />
            <AddressColumn addressData={addressData} templateAlt />
          </ContainerInnerS>
        </section>
        <Spacer />
      </ContainerS>
      {modalsList}
      <Footer />
    </>
  );
};

export const query = graphql`
  query($locale: String!) {
    contentfulHomepage(node_locale: { eq: $locale }) {
      form {
        contentful_id
        placeholder
        title
        type
        nameAttribute
        minLength
        error1
        maxLength
        error2
        additionalData
      }
      messages {
        title
        description {
          description
        }
      }
      addressData {
        fields {
          htmlData
        }
      }
    }
    contentfulContactPage(node_locale: { eq: $locale }) {
      title
      headerMainTitle
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
`;

export default Contact;
