import React from 'react';

import Error from './';

function renderField(field) {
  return (
    <Error message={field.message} onDismiss={field.onDismiss} />
  );
}

export default {
  title: 'Error'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      message: 'This is the error message'
    };
    return renderField(field);
  }
};

