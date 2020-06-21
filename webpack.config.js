'use strict'

const webpack = require('webpack')
const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')
const TileSetPlugin = require('./build/TileSetPlugin')
const AssetPlugin = require('./build/AssetPlugin')
const CharaSpritePlugin = require('./build/CharaSpritePlugin')

module.exports = (_env, argv) => ({
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
      'ENV': JSON.stringify(argv.mode),
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
    new TileSetPlugin(),
    new AssetPlugin(),
    new CharaSpritePlugin(),
    new webpack.ProvidePlugin({
      t: [path.resolve(__dirname, 'src/locales/t'), 'default']
    })
  ],
  externals: {},
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  performance: { hints: false }
})
