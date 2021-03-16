import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import PortfolioGallery from '../components/homepage/PortfolioGallery';
import TechnologiesGrid from '../components/TechnologiesGrid';
import { ImageS } from '../styles/OfferStyles';
import { BoxS, ContainerInnerS, ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const OfferItem = ({ data }) => {
  const { offerItemHeaders } = data.contentfulOfferPage;
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
        <Spacer heightPC="50px" heightMobile="20px" />
        <section>
          <ContainerInnerS>
            <BoxS display="flex" justifyContent="center" flexDirection="column">
              <ImageS src={url} alt="" />
            </BoxS>
            <BoxS
              dangerouslySetInnerHTML={{ __html: htmlData }}
              fontSize="2rem"
              display="flex"
              justifyContent="center"
              flexDirection="column"
            />
          </ContainerInnerS>
        </section>
        <Spacer heightPC="50px" heightMobile="20px" />
        <TechnologiesGrid
          technologies={technologies}
          header={offerItemHeaders[0]}
          smallHeader
        />
        <Spacer />
        <PortfolioGallery
          portfolio={portfolio}
          header={offerItemHeaders[1]}
          smallHeader
        />
        <Spacer />
      </ContainerS>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!, $pageSlug: String!) {
    contentfulOfferPage(node_locale: { eq: $locale }) {
      offerItemHeaders
    }
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
