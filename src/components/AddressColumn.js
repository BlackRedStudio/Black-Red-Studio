import React from 'react';

import { AddressColumnS } from '../styles/HomepageContactContainerStyles';

const AddressColumn = ({
  addressData: {
    fields: { htmlData },
  },
}) => <AddressColumnS dangerouslySetInnerHTML={{ __html: htmlData }} />;

export default AddressColumn;
