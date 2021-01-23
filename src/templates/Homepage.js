import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import Slider from '../components/Slider';
import { ContainerS } from '../styles/ContainerStyles';
import IntroText from '../components/IntroText';
import BanersMiddleSection from '../components/BanersMiddleSection';

const Homepage = ({ data }) => {
  const {
    title,
    banerMain,
    banersButtonsTitle,
    banersButtonsLinks,
    believeInPerfection,
    textBanersMiddle: { textBanersMiddle },
    banersMiddle,
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
    }
  }
`;

export default Homepage;
