import React from 'react';

import CodeEditor from './';
require('codemirror/mode/xml/xml');

export default {
  title: 'CodeEditor'
};

export const DefaultView = {
  name: 'default view',
  render: () => {
    const messageOptions = {
      mode: 'xml'
    };
    const value = '<div>\nHello! This is the <strong>code editor</strong>.\n<p>New paragraph.</p>\n</div>';
    return <CodeEditor value={value} options={messageOptions} />;
  }
};

