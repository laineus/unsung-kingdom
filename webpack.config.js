'use strict'

const webpack = require('webpack')
const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')
const TileSetPlugin = require('./build/TileSetPlugin')
const AssetPlugin = require('./build/AssetPlugin')
const CharachipPlugin = require('./build/CharachipPlugin')

module.exports = {
  entry: {
    app: './src/index.js',
    // guide: './src/guide.js',
    vendor: ['phaser']
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        include: path.resolve(__dirname, 'src/'),
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { targets: { node: 'current' } }]
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080
  },
  plugins: [
    new WriteFilePlugin(),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
    new TileSetPlugin(),
    new AssetPlugin(),
    new CharachipPlugin()
  ],
  externals: {},
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  performance: { hints: false }
}
