import React from 'react';
import { ContainerInnerS } from '../../styles/ContainerStyles';
import ContactForm from '../ContactForm';
import AddressColumn from '../AddressColumn';
import H2 from '../H2';

const HomepageContact = ({ header, form, addressData }) => (
  <ContainerInnerS>
    <H2 preText={header[0]}>{header[1]}</H2>
    <ContactForm form={form} />
    <AddressColumn addressData={addressData} />
  </ContainerInnerS>
);

export default HomepageContact;
