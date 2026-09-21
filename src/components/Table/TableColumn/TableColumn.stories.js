import React from 'react';

import TableColumn from './';

export default {
  title: 'TableColumn'
};

export const DefaultView = {
  name: 'default view',
  render: () => (
    <TableColumn>
      This is the TableColumn children.
    </TableColumn>
  )
};

