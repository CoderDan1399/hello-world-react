/* eslint-disable */

const path = require('path')
const webpack = require('webpack')
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')
module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  // devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FlowBabelWebpackPlugin(),
  ],
}
