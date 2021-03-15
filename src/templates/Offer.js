import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import OfferGrid from '../components/homepage/OfferGrid';
import { ContainerS } from '../styles/ContainerStyles';

const Offer = ({ data }) => {
  const { offerHeader, offer } = data.contentfulHomepage;
  const { title } = data.contentfulOfferPage;
  return (
    <Layout>
      <SEO title={title} />
      <BanerStatic />
      <ContainerS>
        <OfferGrid offer={offer} header={offerHeader} />
      </ContainerS>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!) {
    contentfulOfferPage(node_locale: { eq: $locale }) {
      title
    }
    contentfulHomepage(node_locale: { eq: $locale }) {
      offerHeader
      offer {
        contentful_id
        title
        shortDescription {
          shortDescription
        }
        image {
          localFile {
            url
          }
        }
      }
    }
  }
`;

export default Offer;
