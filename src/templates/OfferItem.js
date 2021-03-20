import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import PortfolioGallery from '../components/homepage/PortfolioGallery';
import TechnologiesGrid from '../components/TechnologiesGrid';
import { ImageS, IconS } from '../styles/OfferStyles';
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
    imageBaner,
  } = data.contentfulOffer;
  return (
    <Layout>
      <SEO title={title} />
      <BanerStatic headers={title} half />
      <ContainerS>
        <Spacer />
        <section>
          <ContainerInnerS>
            <BoxS
              display="flex"
              justifyContent="center"
              flexDirection="column"
              padding="0 50px 0 0"
            >
              <ImageS
                fluid={imageBaner.localFile.childImageSharp.fluid}
                alt=""
              />
            </BoxS>
            <BoxS
              fontSize="1.8rem"
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <IconS src={url} alt="" />
              <div dangerouslySetInnerHTML={{ __html: htmlData }} />
            </BoxS>
          </ContainerInnerS>
        </section>
        <Spacer />
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
      imageBaner {
        localFile {
          childImageSharp {
            fluid(maxWidth: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      portfolio {
        contentful_id
        title
        slug
        images {
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
