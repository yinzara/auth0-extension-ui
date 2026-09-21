import React from 'react';

import Info from './';

function renderField(field) {
  return (
    <Info message={field.message} onDismiss={field.onDismiss} />
  );
}

export default {
  title: 'Info'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      message: 'This is the info message'
    };
    return renderField(field);
  }
};

