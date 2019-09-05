const path = require('path')
const webpack = require('webpack')

const resolve = p => path.resolve(__dirname, p)

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: '#eval-source-map',
}

const clientConfig = Object.assign({}, baseConfig, {
  entry: ['@babel/polyfill', resolve('client/main.js')],
  output: {
    publicPath: '/build',
    path: resolve('client/build'),
    filename: 'bundle.js',
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
    contentBase: resolve('client'),
    noInfo: true,
    historyApiFallback: true,
  },
})

const serverConfig = Object.assign({}, baseConfig, {
  target: 'node',
  node: {
    __dirname: true,
  },
  entry: ['@babel/polyfill', resolve('server/index.js')],
  output: {
    path: resolve('server/build'),
    filename: 'index.js',
  },
})

module.exports = [clientConfig, serverConfig]

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ])
}
