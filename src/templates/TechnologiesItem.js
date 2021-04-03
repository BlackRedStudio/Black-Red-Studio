import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../layout/Seo';
import Footer from '../layout/Footer';
import BanerStatic from '../components/BanerStatic';
import PortfolioGallery from '../components/homepage/PortfolioGallery';
import OfferGrid from '../components/homepage/OfferGrid';
import TechnologiesGrid from '../components/TechnologiesGrid';
import SiblingsSwitcher from '../components/SiblingsSwitcher';
import { IconS, LogoWrapperS, IframeWrapperS } from '../styles/OfferStyles';
import { BoxS, ContainerInnerS, ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';
import Slider from '../components/homepage/Slider';

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
    imageGallery,
    offer,
    portfolio,
    technologies,
  } = data.contentfulTechnologies;

  const codepenIframe =
    data.contentfulTechnologies.codepenIframe?.codepenIframe;

  return (
    <>
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
              {codepenIframe ? (
                <IframeWrapperS
                  dangerouslySetInnerHTML={{ __html: codepenIframe }}
                />
              ) : (
                <Slider baners={imageGallery} noOverlay />
              )}
            </BoxS>
            <BoxS
              fontSize="1.8rem"
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <LogoWrapperS>
                <IconS src={url} alt="" maxWidth="150px" />
              </LogoWrapperS>
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
        {portfolio && (
          <PortfolioGallery
            portfolio={portfolio}
            header={technologiesItemHeaders[1]}
            smallHeader
          />
        )}
        <Spacer />
        {technologies && (
          <TechnologiesGrid
            technologies={technologies}
            header={technologiesItemHeaders[2]}
            smallHeader
          />
        )}
        <Spacer />
      </ContainerS>
      <Footer />
    </>
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
      imageGallery {
        localFile {
          childImageSharp {
            fluid(maxWidth: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      codepenIframe {
        codepenIframe
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
      technologies {
        contentful_id
        title
        slug
        image {
          localFile {
            url
          }
        }
      }
    }
  }
`;

export default TechnologiesItem;
