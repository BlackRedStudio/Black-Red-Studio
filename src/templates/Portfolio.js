import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import PortfolioGallery from '../components/homepage/PortfolioGallery';
import { ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const Portfolios = ({ data }) => {
  const {
    portfolioHeader,
    portfolioGallery,
    portfolioButton,
  } = data.contentfulHomepage;
  const { title, headerMainTitle } = data.contentfulPortfolioPage;
  return (
    <Layout>
      <SEO title={title} />
      <BanerStatic headers={headerMainTitle} />
      <ContainerS>
        <Spacer />
        <PortfolioGallery
          portfolio={portfolioGallery}
          header={portfolioHeader}
          button={portfolioButton}
        />
        <Spacer />
      </ContainerS>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!) {
    contentfulHomepage(node_locale: { eq: $locale }) {
      portfolioHeader
      portfolioGallery {
        contentful_id
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        title
        shortDescription {
          shortDescription
        }
      }
      portfolioButton
    }
    contentfulPortfolioPage(node_locale: { eq: $locale }) {
      title
      headerMainTitle
    }
  }
`;

export default Portfolios;
