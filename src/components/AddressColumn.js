import React from 'react';

import { AddressColumnS } from '../styles/HomepageContactStyles';
import Map from './Map';

const AddressColumn = ({
  addressData: {
    fields: { htmlData },
  },
  templateAlt,
}) => (
  <div
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
  </div>
);

export default AddressColumn;
