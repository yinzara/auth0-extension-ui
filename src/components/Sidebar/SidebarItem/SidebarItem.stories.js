import React from 'react';

import SidebarItem from './';

export default {
  title: 'SidebarItem'
};

export const DefaultView = {
  name: 'default view',
  render: () => (
    <SidebarItem title="Permissions" route="permissions" />
  )
};

export const WithIconView = {
  name: 'with icon view',
  render: () => (
    <SidebarItem
      title="Permissions"
      route="permissions"
      icon={<i className="icon icon-budicon-488" />}
    />
  )
};

export const WithChildren = {
  name: 'with children',
  render: () => (
    <SidebarItem title="Permissions">
        This is the SidebarItem children.
    </SidebarItem>
  )
};

