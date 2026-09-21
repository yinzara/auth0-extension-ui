import React from 'react';
import { Field } from 'redux-form';

import InputCombo from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={InputCombo}
      label={field.label}
      placeholder={field.placeholder}
      options={field.options}
      validationErrors={field.validationErrors}
    />
  );
}

export default {
  title: 'InputCombo',
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
      placeholder: 'My placeholder',
      options: [ { value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' } ],
      validationErrors: { }
    };
    return renderField(field);
  }
};

export const WithErrorFromValidationErrors = {
  name: 'with error from validationErrors',
  render: () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      placeholder: 'My placeholder',
      options: [ { value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' } ],
      validationErrors: { FieldName: [ 'Required' ] }
    };
    return renderField(field);
  }
};

export const WithoutLabel = {
  name: 'without label',
  render: () => {
    const field = {
      name: 'FieldName',
      placeholder: 'My placeholder',
      options: [ { value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' } ]
    };
    return renderField(field);
  }
};

