import React from 'react';

import ContactForm from '../ContactForm';
import AddressColumn from '../AddressColumn';
import H2 from '../H2';

import {
  HomepageContactContainerS,
  BackgroundImageS,
  HomepageContactOverlayS,
} from '../../styles/HomepageContactContainerStyles';
import { ContainerS, ContainerInnerS } from '../../styles/ContainerStyles';

const HomepageContact = ({
  header,
  form,
  addressData,
  background,
  messages,
}) => {
  const {
    localFile: {
      childImageSharp: { fluid },
    },
  } = background;
  return (
    <HomepageContactContainerS>
      <ContainerS>
        <H2 preText={header[0]} color="#fff" marginBottom="70px">
          {header[1]}
        </H2>
        <ContainerInnerS>
          <ContactForm form={form} messages={messages} />
          <AddressColumn addressData={addressData} />
        </ContainerInnerS>
      </ContainerS>
      <BackgroundImageS fluid={fluid} />
      <HomepageContactOverlayS />
    </HomepageContactContainerS>
  );
};

export default HomepageContact;
