module.exports = [
  { key: 'images', prefix: '', dir: '/img', rule: /^\w+\.png$/ },
  { key: 'faces', prefix: 'face/', dir: '/img/faces', rule: /^\w+\.png$/ },
  { key: 'icons', prefix: 'icon/', dir: '/img/icons', rule: /^\w+\.png$/ },
  { key: 'enemies', prefix: 'enemy/', dir: '/img/enemies', rule: /^\w+\.png$/ },
  { key: 'maps', prefix: 'map/', dir: '/img/map', rule: /^\w+\.png$/ },
  { key: 'tileset_images', prefix: 'tileset/', dir: '/img/tileset/image', rule: /^\w+\.png$/ },
  { key: 'tileset_tiles', prefix: '', dir: '/map', rule: /^\w+\D\.json$/ },
  { key: 'tileset_maps', prefix: '', dir: '/map', rule: /^\w+\d+\.json$/ }
]
