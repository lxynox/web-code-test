const path = require('path')
const webpack = require('webpack')

const resolve = p => path.resolve(__dirname, p)

module.exports = {
  entry: [
    'babel-polyfill',
    resolve('client/main.js')
  ],
  output: {
    publicPath: '/build', // Served from `http://localhost:8080/client/build`
    path: resolve('client/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    contentBase: resolve('client'),
    noInfo: true,
    historyApiFallback: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
