import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../layout/Seo';
import Footer from '../layout/Footer';
import BanerStatic from '../components/BanerStatic';
import ContactForm from '../components/ContactForm';
import AddressColumn from '../components/AddressColumn';
import { ContainerS, ContainerInnerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const Contact = ({ data }) => {
  const { form, messages, addressData } = data.contentfulHomepage;
  const { title, headerMainTitle } = data.contentfulContactPage;
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
    }
  }
`;

export default Contact;
