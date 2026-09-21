const path = require('path');

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  mode,
  devtool: mode === 'development' ? 'source-map' : false,
  entry: path.join(__dirname, 'src/components/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: { type: 'commonjs2' }
  },
  // Peer dependencies are provided by the consumer, everything else is bundled.
  externals: [ /^react(-dom|-router)?(\/.*)?$/ ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.styl$/,
        use: [ 'style-loader', 'css-loader', 'stylus-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 100000 } }
      }
    ]
  },
  performance: { hints: false }
};
