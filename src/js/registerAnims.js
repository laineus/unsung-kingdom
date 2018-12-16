import assets from './assets'
export default scene => {
  assets.spritesheet.forEach(args => {
    scene.anims.create({ key: `${args[0]}_walk_down`, frames: scene.anims.generateFrameNumbers(args[0], { start: 0, end: 2 }), repeat: -1, frameRate: 5 })
    scene.anims.create({ key: `${args[0]}_walk_left`, frames: scene.anims.generateFrameNumbers(args[0], { start: 3, end: 5 }), repeat: -1, frameRate: 5 })
    scene.anims.create({ key: `${args[0]}_walk_right`, frames: scene.anims.generateFrameNumbers(args[0], { start: 6, end: 8 }), repeat: -1, frameRate: 5 })
    scene.anims.create({ key: `${args[0]}_walk_up`, frames: scene.anims.generateFrameNumbers(args[0], { start: 9, end: 11 }), repeat: -1, frameRate: 5 })
  })
}
