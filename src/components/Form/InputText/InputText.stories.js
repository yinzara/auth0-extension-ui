import React from 'react';
import { Field } from 'redux-form';

import InputText from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={InputText}
      label={field.label}
      placeholder={field.placeholder}
      validationErrors={field.validationErrors}
      type={field.type}
      disabled={field.disabled}
    />
  );
}

export default {
  title: 'InputText',
  decorators: [
    Story => (<Provider store={store}><FakeForm><Story /></FakeForm></Provider>)
  ]
};

export const DefaultViewText = {
  name: 'default view (text)',
  render: () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      placeholder: 'My placeholder',
      validationErrors: { }
    };
    return renderField(field);
  }
};

export const DefaultViewNumber = {
  name: 'default view (number)',
  render: () => {
    const field = {
      name: 'FieldName',
      label: 'My Label',
      placeholder: 'My number',
      validationErrors: { },
      type: 'number'
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
      validationErrors: { }
    };
    return renderField(field);
  }
};

export const MayBeDisabled = {
  name: 'may be disabled',
  render: () => {
    const field = {
      name: 'FieldName',
      placeholder: 'My placeholder',
      validationErrors: { },
      disabled: true
    };
    return renderField(field);
  }
};

