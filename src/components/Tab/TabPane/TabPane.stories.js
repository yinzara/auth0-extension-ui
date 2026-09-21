import React from 'react';

import TabPane from './';

export default {
  title: 'TabPane'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    return (
      <TabPane title="Users" route="users" />
    );
  }
};

