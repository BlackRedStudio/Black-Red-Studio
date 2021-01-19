import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';

const Homepage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
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

export default Homepage;
