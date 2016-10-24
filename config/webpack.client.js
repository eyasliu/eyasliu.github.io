import webpack from 'webpack';
import path from 'path';

const isDev = process.env.NODE_ENV === 'development'
const join = (...args) => path.join(__dirname, ...args)
const webpackConfig = {
  entry: {
    client: [
      './app/client/index.js'
    ]
  },
  resolve: {
    root: [
      join('../app/client'),
      join('../app/client/modules'),
    ],
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      root: join('../'),
      src: join('../app/client'),
      cc: join('../app/client/common/components'),
    }
  },
  devtool: isDev ? 'eval' : false,
  output: {
    path: join('../build'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/build/'
  },
  module: {
    noParse:[
      join('../node_modules/highlight.js/lib/languages/autoit.js')
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [join('../app/client'), join('./config')],
        exclude: [join('../node_modules'), join('../app/client/vendor')]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]'
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!postcss-loader',
        exclude: [join('../app/client/common/style')]
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader!postcss-loader',
        include: [join('../app/client/common/style')]
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=51200&name=resource/img/[hash].[ext]'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'base64-font-loader'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'base64-font-loader'
      }
    ]
  },
  postcss: () => [
    // require('postcss-inline-comment'),
    require('precss')
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"'+process.env.NODE_ENV+'"'
    })
  ]
};

if(isDev){
  webpackConfig.entry.client.unshift(
    `webpack-dev-server/client?http://localhost:3000`,
    'webpack/hot/only-dev-server'
  )
  webpackConfig.plugins.unshift(
    new webpack.HotModuleReplacementPlugin()
  )
} else {
  webpackConfig.resolve.alias = {
    ...webpackConfig.resolve.alias,
    react: 'react-lite',
    'react-dom': 'react-lite'
  }
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    })
  )
}



export default webpackConfig;
