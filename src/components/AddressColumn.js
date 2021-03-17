import React from 'react';

import { AddressColumnS } from '../styles/HomepageContactStyles';
import Map from './Map';

const AddressColumn = ({
  addressData: {
    fields: { htmlData },
  },
  templateAlt,
}) => (
  <div>
    <AddressColumnS
      dangerouslySetInnerHTML={{ __html: htmlData }}
      templateAlt={templateAlt}
    />
    {templateAlt && <Map />}
  </div>
);

export default AddressColumn;
