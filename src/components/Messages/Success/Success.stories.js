import React from 'react';

import Success from './';

function renderField(field) {
  return (
    <Success message={field.message} onDismiss={field.onDismiss} />
  );
}

export default {
  title: 'Success'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      message: 'This is the success message'
    };
    return renderField(field);
  }
};

