import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../layout/Layout';
import SEO from '../layout/Seo';
import BanerStatic from '../components/BanerStatic';
import OfferGrid from '../components/homepage/OfferGrid';
import { ContainerInnerS, ContainerS, BoxS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';

const Offer = ({ data }) => {
  const { offerHeader, offer, offerButton } = data.contentfulHomepage;
  const {
    title,
    headerMainTitle,
    descriptionRow1: { descriptionRow1 },
    imageRow1,
    descriptionRow2: { descriptionRow2 },
    imageRow2,
  } = data.contentfulOfferPage;
  return (
    <Layout>
      <SEO title={title} />
      <BanerStatic headers={headerMainTitle} />
      <ContainerS>
        <Spacer />
        <section>
          <ContainerInnerS>
            <BoxS
              display="flex"
              fontSize="2rem"
              alignItems="center"
              padding="0 30px 0 0"
              lineHeight="1.2"
              letterSpacing=".5px"
            >
              {descriptionRow1}
            </BoxS>
            <div>
              <Img fluid={imageRow1.localFile.childImageSharp.fluid} />
            </div>
          </ContainerInnerS>
          <ContainerInnerS>
            <div>
              <Img fluid={imageRow2.localFile.childImageSharp.fluid} />
            </div>
            <BoxS
              display="flex"
              fontSize="2rem"
              alignItems="center"
              padding="0 0 0 30px"
              lineHeight="1.2"
              letterSpacing=".5px"
            >
              {descriptionRow2}
            </BoxS>
          </ContainerInnerS>
        </section>
        <Spacer />
        <OfferGrid
          offer={offer}
          header={offerHeader}
          offerButton={offerButton}
        />
        <Spacer />
      </ContainerS>
    </Layout>
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
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      descriptionRow2 {
        descriptionRow2
      }
      imageRow2 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    contentfulHomepage(node_locale: { eq: $locale }) {
      offerHeader
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
      offerButton
    }
  }
`;

export default Offer;
