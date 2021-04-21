import React from 'react';

import {
  AddressColumnS,
  AddressColumnContainerS,
} from '../styles/HomepageContactStyles';
import Map from './Map';

const AddressColumn = ({
  addressData: {
    fields: { htmlData },
  },
  templateAlt,
}) => (
  <AddressColumnContainerS
    data-sal="slide-left"
    data-sal-duration="1000"
    data-sal-delay="300"
    data-sal-easing="ease-out-bounce"
  >
    <AddressColumnS
      dangerouslySetInnerHTML={{ __html: htmlData }}
      templateAlt={templateAlt}
    />
    {templateAlt && <Map />}
  </AddressColumnContainerS>
);

export default AddressColumn;
