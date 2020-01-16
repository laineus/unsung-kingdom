import assetData from 'assetData'
export default {
  image: [
    ['logo_laineus', '../img/logo_laineus.png'],
    ['logo_mafu', '../img/logo_mafu.png'],
    ['title', '../img/title.png'],
    // UI
    ['focus', '../img/focus.png'],
    ['bubble_talk', '../img/bubble_talk.png'],
    ['bubble_action', '../img/bubble_action.png'],
    ['dark', '../img/dark.png'],
    ['arrow', '../img/arrow.png'],
    ['damage', '../img/damage.png'],
    ['critical', '../img/critical.png'],
    ['encounter1', '../img/encounter1.png'],
    ['encounter2', '../img/encounter2.png'],
    ['click', '../img/click.png'],
    ['fadeout', '../img/fadeout.png'],
    // Tileset
    ['tileset/room', '../img/tileset/extruded/room.png'],
    ['tileset/town', '../img/tileset/extruded/town.png'],
    ['tileset/forest', '../img/tileset/extruded/forest.png'],
    ['tileset/underpass', '../img/tileset/extruded/underpass.png'],
    ...assetData.tileset_images,
    // Map
    ['map/world', '../img/map/world.png'],
    ['map/forest', '../img/map/forest.png'],
    // Character
    ['ann', '../img/ann.png'],
    ['francisca', '../img/francisca.png'],
    ['jaquelyn', '../img/jaquelyn.png'],
    // Face
    ...assetData.faces,
    // Object
    ['field/flower', '../img/field/flower.png'],
    ['field/magic_lamp', '../img/magic_lamp.png'],
    // Enemy
    ...assetData.battlers,
  ],
  json: [
    ...assetData.tileset_tiles
  ],
  tilemapTiledJSON: [
    ...assetData.tileset_maps
  ],
  spritesheet: [
    // UI
    ['check', '../img/check.png', { frameWidth: 14, frameHeight: 13, endFrame: 2 }],
    ['menu_icons', '../img/menu_icons.png', { frameWidth: 72, frameHeight: 72, endFrame: 4 }],
    ['battle_effects', '../img/battle_effects.png', { frameWidth: 320, frameHeight: 320, endFrame: 6 }],
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
