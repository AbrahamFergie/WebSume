const express = require('express')
const path = require('path')
const http = require('http')
const port = process.env.PORT || 3000
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)
const server = http.createServer(app)
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'commands',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  }
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.use(express.static('component'))
app.use(express.static(path.join(__dirname, 'public')))
app.get('*', function(request, response){
  response.sendFile(path.resolve(__dirname + '/public', 'index.html'))
})
app.set(port)
// app.set(express.static(path.join(__dirname + '/public')))

server.listen(port)
