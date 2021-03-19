import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import PortfolioGallery from '../components/homepage/PortfolioGallery';
import OfferGrid from '../components/homepage/OfferGrid';
import { ImageS } from '../styles/OfferStyles';
import { BoxS, ContainerInnerS, ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const TechnologiesItem = ({ data }) => {
  const { offerButton } = data.contentfulHomepage;
  const { technologiesItemHeaders } = data.contentfulTechnologiesPage;
  const {
    title,
    description: {
      fields: { htmlData },
    },
    logo: {
      localFile: { url },
    },
    offer,
    portfolio,
  } = data.contentfulTechnologies;
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
              fontSize="1.8rem"
              display="flex"
              justifyContent="center"
              flexDirection="column"
            />
          </ContainerInnerS>
        </section>
        <Spacer heightPC="50px" heightMobile="20px" />
        <OfferGrid
          offer={offer}
          header={technologiesItemHeaders[0]}
          offerButton={offerButton}
          smallHeader
        />
        <Spacer />
        <PortfolioGallery
          portfolio={portfolio}
          header={technologiesItemHeaders[1]}
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
    contentfulTechnologiesPage(node_locale: { eq: $locale }) {
      technologiesItemHeaders
    }
    contentfulTechnologies(
      node_locale: { eq: $locale }
      slug: { eq: $pageSlug }
    ) {
      contentful_id
      title
      description {
        fields {
          htmlData
        }
      }
      logo {
        localFile {
          url
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
    }
  }
`;

export default TechnologiesItem;
