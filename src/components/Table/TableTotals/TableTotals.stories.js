import React from 'react';

import TableTotals from './';

export default {
  title: 'TableTotals'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      currentCount: 5,
      totalCount: 10
    };
    return (<TableTotals currentCount={field.currentCount} totalCount={field.totalCount} />);
  }
};

