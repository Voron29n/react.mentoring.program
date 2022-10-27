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
        test: /\.(tsx|ts)?$/u,
        exclude: /node_modules/u,
        use: ['ts-loader']
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 1024,
              name: 'images/[name].[ext]'
            }
          }
        ],
        type: 'javascript/auto'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    modules: [paths.src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.json']
  }
};
