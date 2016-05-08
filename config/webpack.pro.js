import webpack from 'webpack';

import common from './webpack.common';
import path from 'path';

module.exports = {
  ...common,
  entry: {
    client: [
      './app/client/index.js'
    ]
  },
  resolve: {
    ...common.resolve,
    alias: {
      ...common.resolve.alias,
      // lib
      react: 'react-lite',
      'react-dom': 'react-lite'
    }
  },
  plugins: [
    ...common.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    })
  ]
};
