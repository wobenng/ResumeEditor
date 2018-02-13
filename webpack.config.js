const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
   contentBase: './dist',
   hot: true,
   inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      /*{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: "css-loader",
            options: { importLoaders: 1 } // translates CSS into CommonJS
        },{loader: "postcss-loader"
        },{
            loader: "sass-loader" // compiles Sass to CSS
        }]
        })
      },*/
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader",
            options: { importLoaders: 1 } // translates CSS into CommonJS
        },{
            loader: "sass-loader" // compiles Sass to CSS
        }, {loader: "postcss-loader"
        }]
    },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'images/',
            },
          }
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
     new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};