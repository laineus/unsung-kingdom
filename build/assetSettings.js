module.exports = [
  { key: 'images', prefix: '', dir: '/img', rule: /^\w+\.png$/ },
  { key: 'faces', prefix: 'face/', dir: '/img/faces', rule: /^\w+\.png$/ },
  { key: 'icons', prefix: 'icon/', dir: '/img/icons', rule: /^\w+\.png$/ },
  { key: 'enemies', prefix: 'enemy/', dir: '/img/enemies', rule: /^\w+\.png$/ },
  { key: 'mapImages', prefix: 'map_image/', dir: '/img/map_images', rule: /^\w+\.png$/ },
  { key: 'tilesetImages', prefix: 'tileset/', dir: '/img/tilesets/image', rule: /^\w+\.png$/ },
  { key: 'tilesetTiles', prefix: '', dir: '/map', rule: /^\w+\D\.json$/ },
  { key: 'tilesetMaps', prefix: '', dir: '/map', rule: /^\w+\d+\.json$/ },
  { key: 'se', prefix: 'se/', dir: '/audio/se', rule: /^\w+\.wav$/ },
  { key: 'bgm', prefix: 'bgm/', dir: '/audio/bgm', rule: /^\w+\.mp3$/ }
]
