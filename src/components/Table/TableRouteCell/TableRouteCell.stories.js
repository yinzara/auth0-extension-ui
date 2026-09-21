import React from 'react';

import TableRouteCell from './';

export default {
  title: 'TableRouteCell'
};

export const DefaultView = {
  name: 'default view',
  render: () => (
    <TableRouteCell route={'/someroute'}>Route name</TableRouteCell>
  )
};

