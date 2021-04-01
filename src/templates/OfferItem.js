import React, { useEffect, useState, useRef } from 'react';
import { graphql } from 'gatsby';

import SEO from '../layout/Seo';
import Footer from '../layout/Footer';
import BanerStatic from '../components/BanerStatic';
import PortfolioGallery from '../components/homepage/PortfolioGallery';
import TechnologiesGrid from '../components/TechnologiesGrid';
import SiblingsSwitcher from '../components/SiblingsSwitcher';
import { ImageS, IconWrapperS, IconS } from '../styles/OfferStyles';
import { BoxS, ContainerInnerS, ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const OfferItem = ({ data }) => {
  const [load, isLoaded] = useState(false);
  const iconRef = useRef(null);

  const { offerItemHeaders } = data.contentfulOfferPage;
  const {
    title,
    description: {
      fields: { htmlData },
    },
    imageAnimated: {
      localFile: { url },
    },
    technologies,
    portfolio,
    imageBaner,
  } = data.contentfulOffer;
  useEffect(() => {
    setTimeout(() => {
      isLoaded(true);
    }, 1000);
  }, []);
  return (
    <>
      <SEO title={title} />
      <BanerStatic headers={title} half />
      <SiblingsSwitcher
        prevSibling={data.prevSibling}
        nextSibling={data.nextSibling}
        type="offer"
      />
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
              <IconWrapperS>
                {load && <IconS className="" ref={iconRef} src={url} />}
              </IconWrapperS>
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
    contentfulOfferPage(node_locale: { eq: $locale }) {
      offerItemHeaders
    }
    prevSibling: contentfulOffer(slug: { eq: $prevSibling }) {
      title
      slug
      image {
        localFile {
          url
        }
      }
    }
    nextSibling: contentfulOffer(slug: { eq: $nextSibling }) {
      title
      slug
      image {
        localFile {
          url
        }
      }
    }
    contentfulOffer(node_locale: { eq: $locale }, slug: { eq: $pageSlug }) {
      title
      description {
        fields {
          htmlData
        }
      }
      imageAnimated {
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

export default OfferItem;
