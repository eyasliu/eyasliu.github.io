import webpack from "webpack";
import common from "./webpack.common";

module.exports = {
  ...common,
  entry: {
    client: [
      `webpack-dev-server/client?http://localhost:3000`,
      'webpack/hot/only-dev-server',
      './app/client/index.js'
    ]
  },
  // output: {
  //   ...common.output,
  //   publicPath: `http://192.168.100.100:3000${common.output.publicPath}`
  // },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...common.plugins,
  ]
};
