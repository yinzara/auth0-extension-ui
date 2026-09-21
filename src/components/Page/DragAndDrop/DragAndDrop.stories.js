import React from 'react';
import { action } from 'storybook/actions';

import DragAndDrop from './';

export default {
  title: 'DragAndDrop'
};

export const DefaultView = {
  name: 'default view',
  render: () => (<DragAndDrop onDrop={action('onDrop')} />)
};

