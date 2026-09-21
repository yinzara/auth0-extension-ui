// Sets up a jsdom environment and the enzyme adapter for React 18.
const { JSDOM } = require('jsdom');
const Enzyme = require('enzyme');
const Adapter = require('@cfaester/enzyme-adapter-react-18').default;

const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost/' });

global.window = dom.window;
global.document = dom.window.document;
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true });

Object.getOwnPropertyNames(dom.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    try {
      global[property] = dom.window[property];
    } catch {
      // Ignore read-only properties.
    }
  }
});

global.IS_REACT_ACT_ENVIRONMENT = false;

Enzyme.configure({ adapter: new Adapter() });

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:');
  console.error((error && error.stack) || error);
});
