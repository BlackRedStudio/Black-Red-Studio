import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import PortfolioGallery from '../components/homepage/PortfolioGallery';
import OfferGrid from '../components/homepage/OfferGrid';
import SiblingsSwitcher from '../components/SiblingsSwitcher';
import { IconS, ImageS } from '../styles/OfferStyles';
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
    image: {
      localFile: { url },
    },
    imageBaner,
    offer,
    portfolio,
  } = data.contentfulTechnologies;
  return (
    <Layout>
      <SEO title={title} />
      <BanerStatic headers={title} half />
      <SiblingsSwitcher
        prevSibling={data.prevSibling}
        nextSibling={data.nextSibling}
        type="technologies"
      />
      <ContainerS>
        <Spacer heightPC="50px" heightMobile="20px" />
        <section>
          <ContainerInnerS>
            <BoxS
              display="flex"
              justifyContent="center"
              flexDirection="column"
              padding="0 50px 0 0"
            >
              <IconS src={url} alt="" maxWidth="150px" />
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
              <div dangerouslySetInnerHTML={{ __html: htmlData }} />
            </BoxS>
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
  query(
    $locale: String!
    $pageSlug: String!
    $prevSibling: String!
    $nextSibling: String!
  ) {
    contentfulHomepage(node_locale: { eq: $locale }) {
      offerButton
    }
    contentfulTechnologiesPage(node_locale: { eq: $locale }) {
      technologiesItemHeaders
    }
    prevSibling: contentfulTechnologies(slug: { eq: $prevSibling }) {
      title
      slug
      image {
        localFile {
          url
        }
      }
    }
    nextSibling: contentfulTechnologies(slug: { eq: $nextSibling }) {
      title
      slug
      image {
        localFile {
          url
        }
      }
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
        image {
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
