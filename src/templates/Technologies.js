import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../layout/Seo';
import Footer from '../layout/Footer';
import BanerStatic from '../components/BanerStatic';
import TechnologiesGrid from '../components/TechnologiesGrid';
import { ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const Technologies = ({ data }) => {
  const {
    title,
    headerMainTitle,
    technologiesToShow,
    searchPlaceholder,
  } = data.contentfulTechnologiesPage;
  return (
    <>
      <SEO title={title} />
      <BanerStatic headers={headerMainTitle} />
      <ContainerS>
        <Spacer />
        <TechnologiesGrid
          technologies={technologiesToShow}
          search={searchPlaceholder}
        />
        <Spacer />
      </ContainerS>
      <Footer />
    </>
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
        type
        tags
        slug
        shortDescription {
          shortDescription
        }
        image {
          localFile {
            url
          }
        }
      }
      searchPlaceholder
    }
  }
`;

export default Technologies;
