import React from 'react';

import BlankState from './';

function renderField(field) {
  return (
    <BlankState
      title={field.title}
      iconImage={field.iconImage}
      description={field.description}
    >
      This is the BlankState children.
    </BlankState>
  );
}

export default {
  title: 'BlankState'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      title: 'The title',
      iconImage: (
        <div className="no-content-image">
          no image
        </div>
      ),
      description: 'The description.'
    };
    return renderField(field);
  }
};

