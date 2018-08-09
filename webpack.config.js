const { join, resolve } = require('path');
const { createReadStream } = require('fs');

const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const HtmlTemplatePlugin = require('html-webpack-template');

require("babel-polyfill");

module.exports = {
  context: __dirname,
  
  entry:  ['babel-polyfill', './src/index.js'],
  
  output: {
    path: join( __dirname, 'dist' ),
    filename: 'bundle.js',
    publicPath: '/'
  },
  
  resolve: {
    modules: [
      resolve('./src/'),
      resolve('./node_modules'),
    ],
  },
  
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ],
  },
  
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: HtmlTemplatePlugin,
      inject: false,
      mobile: true,
      appMountId: 'app',
    }),
    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`,
      },
    }),
  ],
  
  devServer: {
    contentBase: './public/',
    historyApiFallback: true,
    hot: true,
    port: 9000,
    setup(app) {
      app.get('/api/tiles', function(req, res)  {
        res.writeHead(200, { 'Content-Type' : 'application/json' });
        createReadStream(join(process.cwd(), 'api/tiles.json'), { encoding: 'utf-8' })
        .pipe(res);
      });
    }
  }
};
