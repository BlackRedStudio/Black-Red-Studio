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
    title,
    headerMainTitle,
    portfolioToShow,
  } = data.contentfulPortfolioPage;
  return (
    <Layout>
      <SEO title={title} />
      <BanerStatic headers={headerMainTitle} />
      <ContainerS>
        <Spacer />
        <PortfolioGallery portfolio={portfolioToShow} />
        <Spacer />
      </ContainerS>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!) {
    contentfulPortfolioPage(node_locale: { eq: $locale }) {
      title
      headerMainTitle
      portfolioToShow {
        contentful_id
        title
        slug
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        shortDescription {
          shortDescription
        }
      }
    }
  }
`;

export default Portfolios;
