import React from 'react';
import { action } from 'storybook/actions';

import TableAction from './';

function renderField(field) {
  return (
    <TableAction
      id={field.id}
      type={field.type}
      title={field.title}
      icon={field.icon}
      onClick={action('onClick')}
      args={field.args}
      disabled={field.disabled}
    />
  );
}

export default {
  title: 'TableAction'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      id: 'delete-permission',
      type: 'default',
      title: 'Delete Permission',
      icon: '264',
      args: [ ],
      disabled: false
    };
    return renderField(field);
  }
};

