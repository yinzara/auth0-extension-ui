import React from 'react';
import { action } from 'storybook/actions';

import Pagination from './';

function renderField(field) {
  return (
    <Pagination
      handlePageChange={action('handlePageChange')}
      totalItems={field.totalItems}
      perPage={field.perPage}
    />
  );
}

export default {
  title: 'Pagination'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      totalItems: 5,
      perPage: 2
    };
    return renderField(field);
  }
};

