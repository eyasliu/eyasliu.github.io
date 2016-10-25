import webpack from 'webpack';
import path from 'path';
import common from './webpack.client';

const commonConfig = {
  resolve: common.resolve,
  devtool: 'inline-source-map',
  externals: {
    'cheerio': 'window',
    // 'react': 'React',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: [path.join(__dirname, '../'), path.join(__dirname, 'config')],
        exclude: [path.join(__dirname, '../node_modules'), path.join(__dirname, '../vendor')]
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]!autoprefixer-loader'
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!autoprefixer-loader!sass-loader',
        exclude: [path.join(__dirname, '../common/style')]
      }
    ],
    preLoaders: [ 
      { //delays coverage til after tests are run, fixing transpiled source coverage error
        test: /\.(js|jsx)$/,
        include: [path.join(__dirname, '../common'),path.join(__dirname, '../modules'),path.join(__dirname, '../utils')],
        exclude: /\.spec\.js$/,
        loader: 'isparta' 
      } 
    ]
  },
  plugins: common.plugins
};
export default commonConfig;
