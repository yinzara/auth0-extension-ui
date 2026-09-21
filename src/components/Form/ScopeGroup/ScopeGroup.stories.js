import React from 'react';
import { Field } from 'redux-form';

import ScopeGroup from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={ScopeGroup}
      label={field.label}
      options={field.options}
    />
  );
}

export default {
  title: 'ScopeGroup',
  decorators: [
    Story => (<Provider store={store}><FakeForm><Story /></FakeForm></Provider>)
  ]
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      options: [ { value: 'op1', text: 'Option 1' }, { value: 'op2', text: 'Option 2' } ]
    };
    return renderField(field);
  }
};

export const WithoutLabel = {
  name: 'without label',
  render: () => {
    const field = {
      name: 'FieldName',
      options: [ { value: 'op1', text: 'Option 1' }, { value: 'op2', text: 'Option 2' } ]
    };
    return renderField(field);
  }
};

