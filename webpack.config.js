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
      inject: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/insiders.html',
      filename: 'insiders.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/calendar.html',
      filename: 'calendar.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/calendarEvent.html',
      filename: 'calendarEvent.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/mediafeed.html',
      filename: 'mediafeed.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/orderbook.html',
      filename: 'orderbook.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/ownership.html',
      filename: 'ownership.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/estimatePackage1.html',
      filename: 'estimatePackage1.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/estimatePackage2.html',
      filename: 'estimatePackage2.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/estimatePackage3.html',
      filename: 'estimatePackage3.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/performance.html',
      filename: 'performance.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/printedMaterial.html',
      filename: 'printedMaterial.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/newsfeed.html',
      filename: 'newsfeed.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/releaseDetail.html',
      filename: 'releaseDetail.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/shareCalculator.html',
      filename: 'shareCalculator.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/sharegraphSmall.html',
      filename: 'sharegraphSmall.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/sharegraph.html',
      filename: 'sharegraph.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/tickerLarge.html',
      filename: 'tickerLarge.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/tickerSmall.html',
      filename: 'tickerSmall.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/trades.html',
      filename: 'trades.html'
    }),
    new webpack.ProvidePlugin({
      jquery: 'jquery',
      Popper: ['popper.js', 'default'],
      moment: "moment"
    }),
    //new MinifyPlugin()
  ]
};
