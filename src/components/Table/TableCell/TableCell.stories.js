import React from 'react';

import TableCell from './';

export default {
  title: 'TableCell'
};

export const DefaultView = {
  name: 'default view',
  render: () => (
    <TableCell>
      This is the TableCell children.
    </TableCell>
  )
};

export const StyledView = {
  name: 'styled view',
  render: () => (
    <TableCell style={{ color: 'blue' }}>
      This is the TableCell children.
    </TableCell>
  )
};

