import React from 'react';

import EntityHeader from './';

function renderField(field) {
  return (
    <EntityHeader
      imgSource={field.imgSource}
      primaryText={field.primaryText}
      secondaryText={field.secondaryText}
    >
      This is the EntityHeader children.
    </EntityHeader>
  );
}

export default {
  title: 'EntityHeader'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      imgSource: 'https://cdn.auth0.com/avatars/1s.png',
      primaryText: 'This is the primary text',
      secondaryText: 'This is the secondary text'
    };
    return renderField(field);
  }
};

