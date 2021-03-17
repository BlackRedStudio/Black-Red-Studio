import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import ContactForm from '../components/ContactForm';
import AddressColumn from '../components/AddressColumn';
import { ContainerS, ContainerInnerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const Contact = ({ data }) => {
  const { form, messages, addressData } = data.contentfulHomepage;
  const { title, headerMainTitle } = data.contentfulContactPage;
  return (
    <Layout>
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
    </Layout>
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
