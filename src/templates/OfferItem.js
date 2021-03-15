import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import { ImageS } from '../styles/OfferStyles';
import { BoxS, ContainerInnerS, ContainerS } from '../styles/ContainerStyles';
import PortfolioGallery from '../components/homepage/PortfolioGallery';
import TechnologiesGrid from '../components/TechnologiesGrid';

const OfferItem = ({ data }) => {
  const {
    title,
    description: {
      fields: { htmlData },
    },
    image: {
      localFile: { url },
    },
    technologies,
    portfolio,
  } = data.contentfulOffer;
  return (
    <Layout>
      <SEO title={title} />
      <BanerStatic headers={title} half />
      <ContainerS>
        <ContainerInnerS>
          <BoxS padding="100px 0">
            <ImageS src={url} alt="" />
          </BoxS>
          <BoxS
            dangerouslySetInnerHTML={{ __html: htmlData }}
            padding="100px 0"
            fontSize="2rem"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          />
        </ContainerInnerS>
        <TechnologiesGrid
          technologies={technologies}
          header="Powiązane technologie"
          smallHeader
        />
        <PortfolioGallery
          portfolio={portfolio}
          header="Powiązane portfolio"
          smallHeader
        />
      </ContainerS>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!, $pageSlug: String!) {
    contentfulOffer(node_locale: { eq: $locale }, slug: { eq: $pageSlug }) {
      title
      description {
        fields {
          htmlData
        }
      }
      image {
        localFile {
          url
        }
      }
      portfolio {
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

export default OfferItem;
