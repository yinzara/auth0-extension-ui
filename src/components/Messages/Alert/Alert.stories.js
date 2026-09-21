import React from 'react';
import { action } from 'storybook/actions';

import Alert from './';

function renderField(field) {
  return (
    <Alert show={field.show} onDismiss={field.close} type={field.type} message={field.message} />
  );
}

export default {
  title: 'Alert'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      show: true,
      type: 'info',
      message: 'This is the alert message',
      close: action('closeAlertMessage')
    };
    return renderField(field);
  }
};

