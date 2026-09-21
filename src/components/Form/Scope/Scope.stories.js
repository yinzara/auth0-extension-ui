import React from 'react';

import Scope from './';

function renderField(field, input) {
  return (
    <Scope key={field.value} field={input} text={field.text} value={field.value} />
  );
}

export default {
  title: 'Scope'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      value: 'FieldValue',
      text: 'FieldText'
    };
    const input = { };
    return renderField(field, input);
  }
};

