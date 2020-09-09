import assets from '../data/assets'
export default scene => {
  assets.spritesheet.forEach(args => {
    const key = args[0].split('/').slice(-1)[0]
    if (args[2].endFrame === 11) {
      scene.anims.create({ key: `${key}_walk_down`, frames: scene.anims.generateFrameNumbers(args[0], { start: 0, end: 2 }), repeat: -1, frameRate: 5, yoyo: true })
      scene.anims.create({ key: `${key}_walk_left`, frames: scene.anims.generateFrameNumbers(args[0], { start: 3, end: 5 }), repeat: -1, frameRate: 5, yoyo: true })
      scene.anims.create({ key: `${key}_walk_right`, frames: scene.anims.generateFrameNumbers(args[0], { start: 6, end: 8 }), repeat: -1, frameRate: 5, yoyo: true })
      scene.anims.create({ key: `${key}_walk_up`, frames: scene.anims.generateFrameNumbers(args[0], { start: 9, end: 11 }), repeat: -1, frameRate: 5, yoyo: true })
    } else if (args[2].endFrame === 2) {
      scene.anims.create({ key: `${key}_waiting`, frames: scene.anims.generateFrameNumbers(args[0], { start: 0, end: 2 }), repeat: -1, frameRate: 4, yoyo: true })
    }
  })
  scene.anims.create({ key: 'poets_lute', frames: scene.anims.generateFrameNumbers('chara_sprite/poets', { start: 0, end: 5 }), repeat: -1, frameRate: 2 })
  scene.anims.create({ key: 'treasure', frames: scene.anims.generateFrameNumbers('chara_sprite/treasure_chest', { start: 0, end: 6 }), repeat: 0, frameRate: 20 })
}
