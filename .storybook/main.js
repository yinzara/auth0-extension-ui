module.exports = {
  framework: '@storybook/react-webpack5',
  stories: [ '../src/components/**/*.stories.js' ],
  webpackFinal: async (config) => {
    config.module.rules.push(
      { test: /\.js$/, include: /src/, loader: 'babel-loader' },
      { test: /\.styl$/, use: [ 'style-loader', 'css-loader', 'stylus-loader' ] }
    );
    return config;
  }
};
