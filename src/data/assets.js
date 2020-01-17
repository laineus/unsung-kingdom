import assetData from 'assetData'
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
    // field/*
    ['field/flower', '../img/field/flower.png'],
    // tileset/*
    ['tileset/room', '../img/tileset/extruded/room.png'],
    ['tileset/town', '../img/tileset/extruded/town.png'],
    ['tileset/forest', '../img/tileset/extruded/forest.png'],
    ['tileset/underpass', '../img/tileset/extruded/underpass.png'],
    ...assetData.tileset_images,
  ],
  json: [
    ...assetData.tileset_tiles
  ],
  tilemapTiledJSON: [
    ...assetData.tileset_maps
  ],
  spritesheet: [
    // UI
    ['check', '../img/check.ss.png', { frameWidth: 14, frameHeight: 13, endFrame: 2 }],
    ['menu_icons', '../img/menu_icons.ss.png', { frameWidth: 72, frameHeight: 72, endFrame: 4 }],
    ['battle_effects', '../img/battle_effects.ss.png', { frameWidth: 320, frameHeight: 320, endFrame: 6 }],
    // Charachip
    ['field/treasure_chest', '../img/field/treasure_chest.png', { frameWidth: 45, frameHeight: 39, endFrame: 7 }],
    ['field/player', '../img/field/player.png', { frameWidth: 26, frameHeight: 44, endFrame: 12 }],
    ['field/jack', '../img/field/jack.png', { frameWidth: 26, frameHeight: 39, endFrame: 12 }],
    ['field/hunter', '../img/field/hunter.png', { frameWidth: 28, frameHeight: 39, endFrame: 12 }],
    ['field/annabelle', '../img/field/annabelle.png', { frameWidth: 28, frameHeight: 41, endFrame: 12 }],
    ['field/amber', '../img/field/amber.png', { frameWidth: 28, frameHeight: 39, endFrame: 12 }],
    ['field/matilda', '../img/field/matilda.png', { frameWidth: 28, frameHeight: 42, endFrame: 12 }],
    ['field/elliott', '../img/field/elliott.png', { frameWidth: 26, frameHeight: 39, endFrame: 12 }],
    ['field/max', '../img/field/max.png', { frameWidth: 26, frameHeight: 42, endFrame: 12 }],
    ['field/mercenary', '../img/field/mercenary.png', { frameWidth: 28, frameHeight: 39, endFrame: 12 }],
    ['field/injured_mercenary', '../img/field/injured_mercenary.png', { frameWidth: 27, frameHeight: 37, endFrame: 1 }],
    ['field/injured_mercenary2', '../img/field/injured_mercenary2.png', { frameWidth: 27, frameHeight: 37, endFrame: 1 }],
    ['field/drystan', '../img/field/drystan.png', { frameWidth: 28, frameHeight: 44, endFrame: 1 }],
    ['field/bear', '../img/field/bear.png', { frameWidth: 56, frameHeight: 84, endFrame: 3 }],
    ['field/dog', '../img/field/dog.png', { frameWidth: 26, frameHeight: 26, endFrame: 12 }]
  ]
}
