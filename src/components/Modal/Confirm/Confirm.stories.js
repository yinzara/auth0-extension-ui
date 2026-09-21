import React from 'react';
import { action } from 'storybook/actions';

import Confirm from './';

function renderField(field) {
  return (
    <Confirm
      title={field.title}
      show={field.show}
      loading={field.loading}
      onCancel={action('cancel')}
      onConfirm={action('confirm')}
      confirmMessage={field.confirm}
      className={field.className}
    >
      This is the Confirm children.
    </Confirm>
  );
}

export default {
  title: 'Confirm'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      title: 'The title',
      show: true,
      loading: false,
      confirmMessage: 'Save',
      className: 'Confirm--myclass'
    };
    return renderField(field);
  }
};

