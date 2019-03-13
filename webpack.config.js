// webpack v4
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: ['./src/cision.config.js', './src/cision.index.js', './src/cision.modules.js' ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    index: 'index.html',
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // only include files present in the `src` subdirectory
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      },
      {
        test: require.resolve('moment'),
        use: [{
          loader: 'expose-loader',
          options: 'moment'
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/insiders.html',
      filename: 'insiders.html'
    }),
    new webpack.ProvidePlugin({
      jquery: 'jquery',
      Popper: ['popper.js', 'default'],
      moment: "moment"
    }),
    //new MinifyPlugin()
  ]
};
