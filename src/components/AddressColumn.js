import React from 'react';

const AddressColumn = ({
  addressData: {
    fields: { htmlData },
  },
}) => <div dangerouslySetInnerHTML={{ __html: htmlData }} />;

export default AddressColumn;
