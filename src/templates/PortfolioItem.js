import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import OfferGrid from '../components/homepage/OfferGrid';
import TechnologiesGrid from '../components/TechnologiesGrid';
import { BoxS, ContainerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';
import Slider from '../components/homepage/Slider';
import PortfolioInfo from '../components/PortfolioInfo';

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
    <Layout>
      <SEO title={title} />
      <BanerStatic headers={title} half />
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
      portfolioItemAboveInfoHeader
      portfolioItemInfoIcons {
        localFile {
          url
        }
      }
      portfolioItemInfoHeaders
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
