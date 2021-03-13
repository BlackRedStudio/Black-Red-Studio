import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';

const Offer = () => (
  <Layout>
    <SEO title="Home" />
    <BanerStatic />
  </Layout>
);

export const query = graphql`
  query($locale: String!) {
    contentfulHomepage(node_locale: { eq: $locale }) {
      banerMain {
        title
        contentful_id
      }
    }
  }
`;

export default Offer;
