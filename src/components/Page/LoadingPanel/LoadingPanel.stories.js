import React from 'react';

import LoadingPanel from './';

function renderField(field) {
  return (
    <LoadingPanel
      backgroundStyle={field.backgroundStyle}
      spinnerStyle={field.spinnerStyle}
      animationStyle={field.animationStyle}
      show={field.show}
      delay={field.delay}
    >
      This is the LoadingPanel children.
    </LoadingPanel>
  );
}

export default {
  title: 'LoadingPanel'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      spinnerStyle: { height: '16px', width: '16px' },
      animationStyle: { paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '10px' },
      show: true,
      delay: 0
    };
    return renderField(field);
  }
};

