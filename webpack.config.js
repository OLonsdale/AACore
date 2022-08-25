const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/scripts.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'scripts.js',
  },
  // rules: [
  //   {
  //     test: /\.(js)$/,
  //     exclude: /node_modules/,
  //     use: ['babel-loader']
  //   }],
  plugins:[     
    new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
  }),]
};