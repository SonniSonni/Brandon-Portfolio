const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/ },

      { test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      },
      
      { 
        test: /\.svg$/,
        use: [{
          loader: 'svg-url-loader',
          options: {
            limit: 10000,
            name: '[path][name].[ext]'
          }
        }]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase:  path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/dist/'
  }
};