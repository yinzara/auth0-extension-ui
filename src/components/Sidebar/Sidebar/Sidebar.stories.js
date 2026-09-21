import React from 'react';

import Sidebar from './';
import SidebarItem from '../SidebarItem';

export default {
  title: 'Sidebar'
};

export const DefaultView = {
  name: 'default view',
  render: () => (
    <Sidebar>
      <p>Users</p>
      <p>Groups</p>
    </Sidebar>
  )
};

export const WithSidebarComponents = {
  name: 'with Sidebar components',
  render: () => {
    return (
      <Sidebar>
        <SidebarItem title="Users" />
        <SidebarItem title="Groups" />
      </Sidebar>
    );
  }
};

