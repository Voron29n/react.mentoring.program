const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: [`${paths.src}/index.tsx`],
  output: {
    path: paths.build,
    publicPath: '/',
    filename: '[name].[chunkhash].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: `${paths.src}/template.html`,
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      // Typescript
      {
        test: /\.(tsx|ts|js|jsx)?$/u,
        exclude: /node_modules/u,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    modules: [paths.src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.json']
  }
};
