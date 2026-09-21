import React from 'react';

import Tab from './';
import TabPane from '../TabPane';

export default {
  title: 'Tab'
};

export const DefaultView = {
  name: 'default view',
  render: () => (
    <Tab>
      <li>Users</li>
      <li>Groups</li>
    </Tab>
  )
};

export const WithTabPaneComponents = {
  name: 'with TabPane components',
  render: () => {
    return (
      <Tab>
        <TabPane title="Users" route="users" />
        <TabPane title="Groups" route="groups" />
      </Tab>
    );
  }
};

