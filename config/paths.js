const path = require('path');
const appRoot = require('app-root-path');

module.exports = {
  // Source files
  src: path.resolve(`${appRoot}`, './src'),

  // Production build files
  build: path.resolve(`${appRoot}`, './dist')
};
