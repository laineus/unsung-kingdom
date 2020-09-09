'use strict'

const webpack = require('webpack')
const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')
const TileExtrudeWebpackPlugin = require('tile-extrude-webpack-plugin')
const PhaserAssetsWebpackPlugin = require('phaser-assets-webpack-plugin')
const packageJson = require('./package.json')
const replaceToExtrudedTiles = list => {
  list.forEach(v => {
    v[1] = v[1].replace('tilesets/original', 'tilesets/extruded')
  })
}
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
      'APP_VERSION': JSON.stringify(packageJson.version),
      'ENV': JSON.stringify(argv.mode),
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
    new TileExtrudeWebpackPlugin({ size: 32, input: './public/img/tilesets/original', output: './public/img/tilesets/extruded' }),
    new PhaserAssetsWebpackPlugin([
      { type: 'image', prefix: '', dir: '/img', rule: /^\w+\.png$/ },
      { type: 'image', prefix: 'map_image/', dir: '/img/map_images', rule: /^\w+\.png$/ },
      { type: 'image', prefix: 'chara_sprite/', dir: '/img/chara_sprites', rule: /^\w+\.png$/ },
      { type: 'image', prefix: 'face/', dir: '/img/faces', rule: /^\w+\.png$/ },
      { type: 'image', prefix: 'enemy/', dir: '/img/enemies', rule: /^\w+\.png$/ },
      { type: 'image', prefix: 'icon/', dir: '/img/icons', rule: /^\w+\.png$/ },
      { type: 'image', prefix: 'tileset/', dir: '/img/tilesets/original', rule: /^\w+\.png$/, callback: replaceToExtrudedTiles },
      { type: 'image', prefix: 'tileset/', dir: '/img/tilesets/image', rule: /^\w+\.png$/ },
      { type: 'audio', prefix: 'se/', dir: '/audio/se', rule: /^\w+\.wav$/ },
      { type: 'audio', prefix: 'bgm/', dir: '/audio/bgm', rule: /^\w+\.(m4a|ogg)$/ },
      { type: 'json', prefix: '', dir: '/map', rule: /^\w+\D\.json$/ },
      { type: 'tilemapTiledJSON', prefix: '', dir: '/map', rule: /^\w+\d+\.json$/ }
    ], { useAbsoluteUrl: false }),
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
