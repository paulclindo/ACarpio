const path = require('path');
const common = require('./webpack.common')
const merge = require('webpack-merge')

var HtmlWebpackPlugin = require('html-webpack-plugin')


var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
      filename: "index.html",
      // chunks: ['home']
    }),
  
  ],
   devServer: {
     inline: true,
     port: 5001,
     host: '0.0.0.0',
   },
  module: {
    rules: [{
        // test: /\.scss$/,
        test: /\.s?css$/,
        use: [
          'style-loader', //3.make styles inject into DOM
          'css-loader', //2.Turns css into common js
          // 'sass-loader' //1.Turns sass into css
          'sass-loader'
        ]
      },
    ]
  }
});