import React from 'react';

import SectionHeader from './';

function renderField(field) {
  return (
    <SectionHeader
      title={field.title}
      description={field.description}
      isSubsection={field.isSubsection}
    >
      This is the SectionHeader children.
    </SectionHeader>
  );
}

export default {
  title: 'SectionHeader'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      title: 'This is the title',
      description: 'This is the description',
      isSubsection: true
    };
    return renderField(field);
  }
};

