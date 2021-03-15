import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';

const OfferItem = ({ data }) => {
  const { title } = data.contentfulOffer;
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!, $pageSlug: String!) {
    contentfulOffer(node_locale: { eq: $locale }, slug: { eq: $pageSlug }) {
      title
    }
  }
`;

export default OfferItem;
