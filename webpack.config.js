var webpack = require('webpack')
var path = require('path')

var config = {
  devtool: 'source-map',
  entry: path.join(__dirname + "/components/index.jsx"),
  output: {
    path: path.join(__dirname + "/public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
    },{
      test: /\.css$/,
      loader: "style-loader"
    },{
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },{
      test: /\.css$/,
      loader: 'css-loader',
      query:{
        modules:true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    }]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}

if(process.env.NODE_ENV === 'production'){
  config.devtool = false
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ]
}


module.exports = config
