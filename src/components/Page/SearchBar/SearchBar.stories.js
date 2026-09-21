import React from 'react';
import { action } from 'storybook/actions';

import SearchBar from './';

function renderField(field) {
  return (
    <SearchBar
      placeholder={field.placeholder}
      searchOptions={field.searchOptions}
      showInstructions={field.showInstructions}
      iconCode={field.iconCode}
      handleKeyPress={action('handleKeyPress')}
      handleReset={action('handleReset')}
      handleOptionChange={action('handleOptionChange')}
      handleInputChange={action('handleInputChange')}
      searchValue={field.searchValue}
    />
  );
}

export default {
  title: 'SearchBar'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const field = {
      placeholder: 'The placeholder',
      searchOptions: [
        {
          value: 'user',
          title: 'User'
        },
        {
          value: 'email',
          title: 'Email'
        }
      ]
    };
    return renderField(field);
  }
};

export const InstructionsView = {
  name: 'instructions view',
  render: () => {
    const field = {
      placeholder: 'The placeholder',
      searchOptions: [
        {
          value: 'user',
          title: 'User'
        },
        {
          value: 'email',
          title: 'Email'
        }
      ],
      showInstructions: true
    };
    return renderField(field);
  }
};

export const WithDiferentIcon = {
  name: 'with diferent icon',
  render: () => {
    const field = {
      placeholder: 'The placeholder',
      searchOptions: [
        {
          value: 'user',
          title: 'User'
        },
        {
          value: 'email',
          title: 'Email'
        }
      ],
      iconCode: 488
    };
    return renderField(field);
  }
};

export const WithInitSearchValue = {
  name: 'with init search value',
  render: () => {
    const field = {
      placeholder: 'The placeholder',
      searchOptions: [
        {
          value: 'user',
          title: 'User'
        },
        {
          value: 'email',
          title: 'Email'
        }
      ],
      iconCode: 488,
      searchValue: 'test'
    };
    return renderField(field);
  }
};

