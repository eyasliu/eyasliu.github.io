import webpack from "webpack";
import path from "path";
import fs from "fs";
// import config from './config';

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod)

const webpackConfig = {
  
  entry: {
    server: [
      './app/server/main.js'
    ]
  },
  target: 'node',
  node: {
    __dirname: 'mock',
    __filename: 'mock'
  },
  resolve: {
    alias: {
      server: path.join(__dirname, '../app/server'),
      static: path.join(__dirname, '../app/static'),
      utils: path.join(__dirname, '../app/server/utils'),
      api: path.join(__dirname, '../app/server/api'),
      controllers: path.join(__dirname, '../app/server/api/controllers'),
      policies: path.join(__dirname, '../app/server/api/policies'),
      models: path.join(__dirname, '../app/server/api/models'),
    }
  },
  externals: nodeModules,
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    publicPath: `/build/`,
    // libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"'
    }),
    new webpack.BannerPlugin('require("source-map-support").install();',
      {raw: true, entryOnly: false})
  ]
};

if (process.env.NODE_ENV == 'production') {
  webpackConfig.devtool = false;
  webpackConfig.plugins = [
    ...webpackConfig.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    })
  ]
}


export default webpackConfig;