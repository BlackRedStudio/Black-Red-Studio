import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../layout/Seo';
import Footer from '../layout/Footer';
import IntroText from '../components/homepage/IntroText';
import BanersMiddle from '../components/homepage/BanersMiddle';
import OfferGrid from '../components/homepage/OfferGrid';
import TechnologiesSlider from '../components/homepage/TechnologiesSlider';
import ProcessLine from '../components/homepage/ProcessLine';
import WorkWith from '../components/homepage/WorkWith';
import PortfolioGallery from '../components/homepage/PortfolioGallery';
import HomepageContact from '../components/homepage/HomepageContact';
import Modal from '../components/Modal';
import { ContainerS, ContainerInnerS } from '../styles/ContainerStyles';
import { Spacer } from '../styles/HelpersStyles';
import BanerMovie from '../components/homepage/BanerMovie';

const Homepage = ({ data }) => {
  const {
    title,
    banerMovieHeaders,
    banersButtonsTitle,
    banersButtonsLinks,
    believeInPerfection,
    textBanersMiddle: { textBanersMiddle },
    banersMiddle,
    offerHeader,
    offer,
    offerButton,
    technologiesHeader,
    technologies,
    technologiesButton,
    processHeader,
    process,
    workWithHeader,
    workWith,
    portfolioHeader,
    portfolioGallery,
    portfolioButton,
    contactHeader,
    form,
    addressData,
    formBackground,
    messages,
    modals: { modalTitle, modalName, modalDescription, modalButton },
  } = data.contentfulHomepage;

  return (
    <>
      <SEO title={title} />
      <BanerMovie
        headers={banerMovieHeaders}
        buttonsTitles={banersButtonsTitle}
        buttonsLinks={banersButtonsLinks}
      />
      <ContainerS>
        <Spacer />
        <IntroText text={believeInPerfection} />
        <Spacer />
        <BanersMiddle text={textBanersMiddle} baners={banersMiddle} />
        <Spacer />
        <OfferGrid
          offer={offer}
          header={offerHeader}
          offerButton={offerButton}
        />
        <Spacer />
        <TechnologiesSlider
          technologies={technologies}
          header={technologiesHeader}
          technologiesButton={technologiesButton}
        />
        <Spacer />
        <ContainerInnerS>
          <ProcessLine process={process} header={processHeader} />
          <WorkWith workWith={workWith} header={workWithHeader} />
        </ContainerInnerS>
        <Spacer />
        <PortfolioGallery
          portfolio={portfolioGallery}
          header={portfolioHeader}
          button={portfolioButton}
        />
        <Spacer />
      </ContainerS>
      <HomepageContact
        header={contactHeader}
        form={form}
        addressData={addressData}
        background={formBackground}
        messages={messages}
      />
      <Modal
        modalName={modalName}
        modalHeader={modalTitle}
        modalDescription={modalDescription.fields.htmlData}
        modalButton={modalButton}
      />
      <Footer />
    </>
  );
};

export const query = graphql`
  query($locale: String!) {
    contentfulHomepage(node_locale: { eq: $locale }) {
      title
      banerMovieHeaders
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
      technologiesHeader
      technologies {
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
      technologiesButton
      processHeader
      process {
        contentful_id
        description {
          description
        }
        title
        icon {
          localFile {
            url
          }
        }
      }
      workWithHeader
      workWith {
        contentful_id
        title
        icon {
          localFile {
            url
          }
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      portfolioHeader
      portfolioGallery {
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
      portfolioButton
      contactHeader
      form {
        contentful_id
        placeholder
        title
        type
        nameAttribute
        minLength
        error1
        maxLength
        error2
        additionalData
      }
      messages {
        title
        description {
          description
        }
      }
      addressData {
        fields {
          htmlData
        }
      }
      formBackground {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      modals {
        modalTitle
        modalName
        modalDescription {
          fields {
            htmlData
          }
        }
        modalButton
      }
    }
  }
`;

export default Homepage;
