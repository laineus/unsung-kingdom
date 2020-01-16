module.exports = [
  { key: 'faces', prefix: 'face/', dir: '/img/face', rule: /.*\.png$/ },
  { key: 'battlers', prefix: 'battler/', dir: '/img/battler', rule: /.*\.png$/ },
  { key: 'tileset_images', prefix: 'tileset/', dir: '/img/tileset/image', rule: /.*\.png$/ },
  { key: 'tileset_tiles', prefix: '', dir: '/map', rule: /.*\D\.json$/ },
  { key: 'tileset_maps', prefix: '', dir: '/map', rule: /.*\d+\.json$/ }
]
