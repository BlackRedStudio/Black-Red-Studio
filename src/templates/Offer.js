import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../layout/Seo';
import Footer from '../layout/Footer';
import BanerStatic from '../components/BanerStatic';
import OfferGrid from '../components/homepage/OfferGrid';
import { ContainerInnerS, ContainerS, BoxS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const Offer = ({ data }) => {
  const { offerHeader, offerButton } = data.contentfulHomepage;
  const {
    title,
    headerMainTitle,
    descriptionRow1: { descriptionRow1 },
    imageRow1,
    descriptionRow2: { descriptionRow2 },
    imageRow2,
    offerToShow,
  } = data.contentfulOfferPage;
  return (
    <>
      <SEO title={title} />
      <BanerStatic headers={headerMainTitle} />
      <ContainerS>
        <Spacer />
        <section>
          <ContainerInnerS $reversed>
            <BoxS
              $display="flex"
              $fontSize="2rem"
              $alignItems="center"
              $padding="0 30px 0 0"
              $lineHeight="1.2"
              $letterSpacing=".5px"
              data-sal="slide-right"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-out-bounce"
            >
              {descriptionRow1}
            </BoxS>
            <div
              data-sal="zoom-in"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-out-bounce"
            >
              <GatsbyImage image={imageRow1.localFile.childImageSharp.gatsbyImageData} alt="" />
            </div>
          </ContainerInnerS>
          <ContainerInnerS>
            <div
              data-sal="zoom-in"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-out-bounce"
            >
              <GatsbyImage image={imageRow2.localFile.childImageSharp.gatsbyImageData} alt="" />
            </div>
            <BoxS
              $display="flex"
              $fontSize="2rem"
              $alignItems="center"
              $padding="0 0 0 30px"
              $lineHeight="1.2"
              $letterSpacing=".5px"
              data-sal="slide-right"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease-out-bounce"
            >
              {descriptionRow2}
            </BoxS>
          </ContainerInnerS>
        </section>
        <Spacer />
        <OfferGrid
          offer={offerToShow}
          header={offerHeader}
          offerButton={offerButton}
        />
        <Spacer />
      </ContainerS>
      <Footer />
    </>
  );
};

export const query = graphql`
  query($locale: String!) {
    contentfulOfferPage(node_locale: { eq: $locale }) {
      title
      headerMainTitle
      descriptionRow1 {
        descriptionRow1
      }
      imageRow1 {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 700)
          }
        }
      }
      descriptionRow2 {
        descriptionRow2
      }
      imageRow2 {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 700)
          }
        }
      }
      offerToShow {
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
    }
    contentfulHomepage(node_locale: { eq: $locale }) {
      offerHeader
      offerButton
    }
  }
`;

export default Offer;
