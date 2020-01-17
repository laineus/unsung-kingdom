module.exports = [
  { key: 'images', prefix: '', dir: '/img', rule: /^\w+\.png$/ },
  { key: 'faces', prefix: 'face/', dir: '/img/face', rule: /^\w+\.png$/ },
  { key: 'battlers', prefix: 'battler/', dir: '/img/battler', rule: /^\w+\.png$/ },
  { key: 'maps', prefix: 'map/', dir: '/img/map', rule: /^\w+\.png$/ },
  { key: 'tileset_images', prefix: 'tileset/', dir: '/img/tileset/image', rule: /^\w+\.png$/ },
  { key: 'tileset_tiles', prefix: '', dir: '/map', rule: /^\w+\D\.json$/ },
  { key: 'tileset_maps', prefix: '', dir: '/map', rule: /^\w+\d+\.json$/ }
]
