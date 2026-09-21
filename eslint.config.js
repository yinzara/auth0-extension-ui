const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');

module.exports = [
  { ignores: [ 'dist/**', 'node_modules/**', 'storybook-static/**' ] },
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    files: [ 'test/**/*.js', '*.config.js', '.scripts/**/*.js' ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: { ...globals.node, ...globals.mocha, ...globals.browser }
    }
  },
  {
    files: [ '.storybook/**/*.js' ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node }
    }
  },
  {
    files: [ 'src/**/*.js' ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node, ...globals.mocha }
    },
    settings: { react: { version: '18.3' } },
    rules: {
      'react/display-name': 0,
      'no-unused-expressions': 0,
      'array-bracket-spacing': [ 2, 'always' ],
      'comma-dangle': [ 2, 'never' ],
      'eol-last': 2,
      indent: [ 2, 2, { SwitchCase: 1 } ],
      'jsx-quotes': [ 2, 'prefer-double' ],
      'no-var': 2,
      'object-curly-spacing': [ 2, 'always' ],
      quotes: [ 2, 'single', 'avoid-escape' ],
      semi: [ 2, 'always' ]
    }
  }
];
