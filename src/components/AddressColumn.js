import React from 'react';

const AddressColumn = ({ addressData }) => (
  <div dangerouslySetInnerHTML={addressData} />
);

export default AddressColumn;
