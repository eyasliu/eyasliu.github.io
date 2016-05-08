import webpack from 'webpack';

import common from './webpack.common';
import path from 'path';

module.exports = {
  ...common,
  entry: {
    client: [
      './app/client/entry.js'
    ]
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
