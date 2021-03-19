import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import OfferGrid from '../components/homepage/OfferGrid';
import TechnologiesGrid from '../components/TechnologiesGrid';
import { BoxS, ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';
import H3 from '../components/H3';
import Slider from '../components/homepage/Slider';

const PortfolioItem = ({ data }) => {
  const { offerButton } = data.contentfulHomepage;
  const { portfolioItemHeaders } = data.contentfulPortfolioPage;
  const {
    title,
    url,
    description: {
      fields: { htmlData },
    },
    images,
    offer,
    technologies,
  } = data.contentfulPortfolio;

  return (
    <Layout>
      <SEO title={title} />
      <BanerStatic headers={title} half />
      <ContainerS>
        <Spacer heightPC="50px" heightMobile="20px" />
        <section>
          <H3>
            <a href={`https://${url}`} target="_blank" rel="noreferrer">
              {url}
            </a>
          </H3>
          <Slider baners={images} noOverlay />
          <BoxS
            dangerouslySetInnerHTML={{ __html: htmlData }}
            fontSize="2rem"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          />
        </section>
        <Spacer heightPC="50px" heightMobile="20px" />
        <TechnologiesGrid
          technologies={technologies}
          header={portfolioItemHeaders[0]}
          smallHeader
        />
        <Spacer />
        <OfferGrid
          offer={offer}
          header={portfolioItemHeaders[1]}
          offerButton={offerButton}
          smallHeader
        />
        <Spacer />
      </ContainerS>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!, $pageSlug: String!) {
    contentfulHomepage(node_locale: { eq: $locale }) {
      offerButton
    }
    contentfulPortfolioPage(node_locale: { eq: $locale }) {
      portfolioItemHeaders
    }
    contentfulPortfolio(node_locale: { eq: $locale }, slug: { eq: $pageSlug }) {
      contentful_id
      title
      url
      description {
        fields {
          htmlData
        }
      }
      images {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      offer {
        contentful_id
        title
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
      technologies {
        contentful_id
        title
        slug
        logo {
          localFile {
            url
          }
        }
      }
    }
  }
`;

export default PortfolioItem;
