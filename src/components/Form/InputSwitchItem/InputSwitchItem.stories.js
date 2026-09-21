import React from 'react';
import { Field } from 'redux-form';

import InputSwitchItem from './';
import FakeForm from '../../utils/FakeForm';
import { Provider, store } from '../../utils/formUtils';

function renderField(field) {
  return (
    <Field
      name={field.name}
      component={InputSwitchItem}
      title={field.title}
      description={field.description}
    />
  );
}

export default {
  title: 'InputSwitchItem',
  decorators: [
    Story => (<Provider store={store}><FakeForm><Story /></FakeForm></Provider>)
  ]
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      title: 'My Title',
      description: (<span>My Description</span>),
      name: 'FieldName'
    };
    return renderField(field);
  }
};

