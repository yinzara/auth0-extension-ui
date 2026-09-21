import React from 'react';
import { Field } from 'redux-form';

import VirtualizedSelect from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      placeholder={field.placeholder}
      component={VirtualizedSelect}
      options={field.options}
      label={field.label}
      multi={field.multi}
      displayLabelOnly={field.displayLabelOnly}
    />
  );
}

export default {
  title: 'VirtualizedSelect',
  decorators: [
    Story => (<Provider store={store}><FakeForm><Story /></FakeForm></Provider>)
  ]
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      name: 'FieldName',
      placeholder: 'my placeholder',
      options: [
        { value: 'ariel@auth0.com', label: 'Ariel Gerstein' },
        { value: 'victor@auth0.com', label: 'Victor Fernandez' },
        { value: 'ricky@auth0.com',label: 'Ricky Rauch'  },
        { value: 'cherna@auth0.com',label: 'Tomas Cherna'  }
      ]
    };
    return renderField(field);
  }
};

export const WithLabel = {
  name: 'with label',
  render: () => {
    const field = {
      name: 'FieldName',
      label: 'Label',
      placeholder: 'My placeholder',
      options: [
        { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
        { label: 'Victor Fernandez', value: 'victor@auth0.com' },
        { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
        { label: 'Tomas Cherna', value: 'cherna@auth0.com' }
      ]
    };
    return renderField(field);
  }
};

export const WithDisplayLabelOnly = {
  name: 'with displayLabelOnly',
  render: () => {
    const field = {
      name: 'FieldName',
      label: 'Label',
      placeholder: 'My placeholder',
      displayLabelOnly: true,
      options: [
        { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
        { label: 'Victor Fernandez', value: 'victor@auth0.com' },
        { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
        { label: 'Tomas Cherna', value: 'cherna@auth0.com' }
      ]
    };
    return renderField(field);
  }
};

export const DefaultViewWithMulti = {
  name: 'default view with multi',
  render: () => {
    const field = {
      name: 'FieldName',
      placeholder: 'my placeholder',
      multi:true,
      options: [
        { value: 'ariel@auth0.com', label: 'Ariel Gerstein' },
        { value: 'victor@auth0.com', label: 'Victor Fernandez' },
        { value: 'ricky@auth0.com', label: 'Ricky Rauch' },
        { value: 'cherna@auth0.com', label: 'Tomas Cherna' }
      ]
    };
    return renderField(field);
  }
};

export const WithLabelWithMulti = {
  name: 'with label with multi',
  render: () => {
    const field = {
      name: 'FieldName',
      label: 'Label',
      placeholder: 'My placeholder',
      multi:true,
      options: [
        { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
        { label: 'Victor Fernandez', value: 'victor@auth0.com' },
        { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
        { label: 'Tomas Cherna', value: 'cherna@auth0.com' }
      ]
    };
    return renderField(field);
  }
};

export const WithDisplayLabelOnlyWithMulti = {
  name: 'with displayLabelOnly with multi',
  render: () => {
    const field = {
      name: 'FieldName',
      label: 'Label',
      placeholder: 'My placeholder',
      displayLabelOnly: true,
      multi:true,
      options: [
        { label: 'Ariel Gerstein', value: 'ariel@auth0.com' },
        { label: 'Victor Fernandez', value: 'victor@auth0.com' },
        { label: 'Ricky Rauch', value: 'ricky@auth0.com' },
        { label: 'Tomas Cherna', value: 'cherna@auth0.com' }
      ]
    };
    return renderField(field);
  }
};

