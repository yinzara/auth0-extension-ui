import { createElement } from 'react';
import { MemoryRouter } from 'react-router';

// Components such as Link and SidebarItem need a router.
export const decorators = [
  (Story) => createElement(MemoryRouter, null, createElement(Story))
];
