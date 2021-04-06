import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../layout/Seo';
import Footer from '../layout/Footer';
import BanerStatic from '../components/BanerStatic';
import OfferGrid from '../components/homepage/OfferGrid';
import TechnologiesGrid from '../components/TechnologiesGrid';
import SiblingsSwitcher from '../components/SiblingsSwitcher';
import Slider from '../components/homepage/Slider';
import PortfolioInfo from '../components/PortfolioInfo';
import { BoxS, ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const PortfolioItem = ({ data }) => {
  const { offerButton } = data.contentfulHomepage;
  const {
    portfolioItemHeaders,
    portfolioItemAboveInfoHeader,
    portfolioItemInfoIcons,
    portfolioItemInfoHeaders,
  } = data.contentfulPortfolioPage;
  const {
    title,
    infoContents,
    description: {
      fields: { htmlData },
    },
    images,
    offer,
    technologies,
  } = data.contentfulPortfolio;

  return (
    <>
      <SEO title={title} />
      <BanerStatic headers={title} half />
      <SiblingsSwitcher
        prevSibling={data.prevSibling}
        nextSibling={data.nextSibling}
        type="portfolio"
      />
      <ContainerS>
        <Spacer />
        <section>
          <PortfolioInfo
            aboveInfoHeadersText={portfolioItemAboveInfoHeader}
            infoIcons={portfolioItemInfoIcons}
            infoHeaders={portfolioItemInfoHeaders}
            infoContents={infoContents}
          />
          <Spacer heightPC="50px" heightMobile="20px" />
          <Slider baners={images} noOverlay />
          <Spacer heightPC="70px" heightMobile="40px" />
          <BoxS
            dangerouslySetInnerHTML={{ __html: htmlData }}
            fontSize="1.8rem"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          />
        </section>
        <Spacer />
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
    contentfulPortfolioPage(node_locale: { eq: $locale }) {
      portfolioItemHeaders
      portfolioItemAboveInfoHeader
      portfolioItemInfoIcons {
        localFile {
          url
        }
      }
      portfolioItemInfoHeaders
    }
    prevSibling: contentfulPortfolio(slug: { eq: $prevSibling }) {
      title
      slug
      image {
        localFile {
          url
        }
      }
    }
    nextSibling: contentfulPortfolio(slug: { eq: $nextSibling }) {
      title
      slug
      image {
        localFile {
          url
        }
      }
    }
    contentfulPortfolio(node_locale: { eq: $locale }, slug: { eq: $pageSlug }) {
      contentful_id
      title
      infoContents
      description {
        fields {
          htmlData
        }
      }
      images {
        contentful_id
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
        image {
          localFile {
            url
          }
        }
      }
    }
  }
`;

export default PortfolioItem;
