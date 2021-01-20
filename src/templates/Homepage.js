import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import Slider from '../components/Slider';

const Homepage = ({ data }) => (
  <Layout>
    <SEO title={data.contentfulHomepage.title} />
    <Slider baners={data.contentfulHomepage.banerMain} />
  </Layout>
);

export const query = graphql`
  query($locale: String!) {
    contentfulHomepage(node_locale: { eq: $locale }) {
      title
      banerMain {
        contentful_id
        file {
          url
        }
        title
      }
    }
  }
`;

export default Homepage;
