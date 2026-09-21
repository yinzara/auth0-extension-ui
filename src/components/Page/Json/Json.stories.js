import React from 'react';

import Json from './';

export default {
  title: 'Json'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const jsonObject = {
      name: 'json object title',
      items: {
        first: 'first',
        second: 'second'
      },
      list: [ 'first', 'second' ]
    };
    return <Json jsonObject={jsonObject} />;
  }
};

