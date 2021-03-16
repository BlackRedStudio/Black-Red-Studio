import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import TechnologiesGrid from '../components/TechnologiesGrid';
import { ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const Technologies = ({ data }) => {
  const {
    title,
    headerMainTitle,
    technologiesToShow,
  } = data.contentfulTechnologiesPage;
  return (
    <Layout>
      <SEO title={title} />
      <BanerStatic headers={headerMainTitle} />
      <ContainerS>
        <Spacer />
        <TechnologiesGrid technologies={technologiesToShow} />
        <Spacer />
      </ContainerS>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!) {
    contentfulTechnologiesPage(node_locale: { eq: $locale }) {
      title
      headerMainTitle
      technologiesToShow {
        contentful_id
        title
        shortDescription {
          shortDescription
        }
        logo {
          localFile {
            url
          }
        }
      }
    }
  }
`;

export default Technologies;
