import React from 'react';
import { Field } from 'redux-form';

import InputCheckBox from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={InputCheckBox}
      label={field.label}
      validationErrors={field.validationErrors}
    />
  );
}

export default {
  title: 'InputCheckBox',
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
      validationErrors: { FieldName: [ 'Required' ] }
    };
    return renderField(field);
  }
};

export const WithoutLabel = {
  name: 'without label',
  render: () => {
    const field = {
      name: 'FieldName'
    };
    return renderField(field);
  }
};

