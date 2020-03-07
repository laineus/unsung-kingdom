import assetData from 'assetData'
import charachipData from 'charachipData'
export default {
  image: [
    // *
    ...assetData.images,
    // map/*
    ...assetData.maps,
    // face/*
    ...assetData.faces,
    // battler/*
    ...assetData.battlers,
    // icon/*
    ...assetData.icons,
    // tileset/*
    ['tileset/room', '../img/tileset/extruded/room.png'],
    ['tileset/town', '../img/tileset/extruded/town.png'],
    ['tileset/forest', '../img/tileset/extruded/forest.png'],
    ['tileset/underpass', '../img/tileset/extruded/underpass.png'],
    ['tileset/catacomb', '../img/tileset/extruded/catacomb.png'],
    ['tileset/temple', '../img/tileset/extruded/temple.png'],
    ...assetData.tileset_images,
  ],
  json: [
    ...assetData.tileset_tiles
  ],
  tilemapTiledJSON: [
    ...assetData.tileset_maps
  ],
  spritesheet: [
    // *
    ['check', '../img/check.ss.png', { frameWidth: 14, frameHeight: 13, endFrame: 2 }],
    ['menu_icons', '../img/menu_icons.ss.png', { frameWidth: 72, frameHeight: 72, endFrame: 4 }],
    ['battle_effects', '../img/battle_effects.ss.png', { frameWidth: 320, frameHeight: 320, endFrame: 6 }],
    // field/*
    ...charachipData
  ]
}
