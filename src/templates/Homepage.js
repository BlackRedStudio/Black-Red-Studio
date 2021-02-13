import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import { ContainerS } from '../styles/ContainerStyles';
import Slider from '../components/homepage/Slider';
import IntroText from '../components/homepage/IntroText';
import BanersMiddleSection from '../components/homepage/BanersMiddleSection';
import OfferGrid from '../components/homepage/OfferGrid';
import TechnologiesSlider from '../components/homepage/TechnologiesSlider';

const Homepage = ({ data }) => {
  const {
    title,
    banerMain,
    banersButtonsTitle,
    banersButtonsLinks,
    believeInPerfection,
    textBanersMiddle: { textBanersMiddle },
    banersMiddle,
    offerHeader,
    offer,
    technologiesHeader,
    technologies,
  } = data.contentfulHomepage;
  return (
    <Layout>
      <SEO title={title} />
      <Slider
        baners={banerMain}
        buttonsTitles={banersButtonsTitle}
        buttonsLinks={banersButtonsLinks}
      />
      <ContainerS>
        <IntroText text={believeInPerfection} />
        <BanersMiddleSection text={textBanersMiddle} baners={banersMiddle} />
        <OfferGrid offer={offer} header={offerHeader} />
        <TechnologiesSlider
          technologies={technologies}
          header={technologiesHeader}
        />
      </ContainerS>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!) {
    contentfulHomepage(node_locale: { eq: $locale }) {
      title
      banerMain {
        contentful_id
        title
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      banersButtonsTitle
      banersButtonsLinks
      believeInPerfection
      textBanersMiddle {
        textBanersMiddle
      }
      banersMiddle {
        localFile {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      offerHeader
      offer {
        contentful_id
        title
        shortDescription {
          shortDescription
        }
        image {
          localFile {
            url
          }
        }
      }
      technologiesHeader
      technologies {
        contentful_id
        title
        shortDescription {
          shortDescription
        }
        logo {
          localFile {
            url
          }
        }
      }
    }
  }
`;

export default Homepage;
