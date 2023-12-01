import React from 'react';

import { NotificationS } from '../styles/NotificationStyles';

const Notification = ({ type, lifetime, children }) => (
  <NotificationS $type={type} $lifetime={lifetime}>
    {children}
  </NotificationS>
);

Notification.defaultProps = {
  lifetime: '5s',
};

export default Notification;
