import React from 'react';

import TableHeader from './';

export default {
  title: 'TableHeader'
};

export const DefaultView = {
  name: 'default view',
  render: () => (
    <TableHeader>
      This is the TableHeader children.
    </TableHeader>
  )
};

