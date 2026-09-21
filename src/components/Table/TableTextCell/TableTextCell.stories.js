import React from 'react';
import { action } from 'storybook/actions';

import TableTextCell from './';

export default {
  title: 'TableTextCell'
};

export const DefaultView = {
  name: 'default view',
  render: () => (
    <TableTextCell>
      This is the TableTextCell children.
    </TableTextCell>
  )
};

export const WithLink = {
  name: 'with link',
  render: () => (
    <TableTextCell onClick={action('onClick')}>
      This is the TableTextCell children.
    </TableTextCell>
  )
};

