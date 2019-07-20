import config from '../data/config'
export default class Menu extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    scene.add.existing(this)
    this.bg = scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x886644, 0.2).setOrigin(0, 0).setInteractive()
    this.bg.blendMode = 1
    this.bg.on('pointerdown', () => {
      this.destroy()
    })
    this.window = scene.add.rectangle(20, 20, config.WIDTH - 40, config.HEIGHT - 40, 0x000000, 0.7).setOrigin(0, 0).setInteractive()
    this.add([this.bg, this.window])
    this.scene.gameScene.blur(true)
    scene.scene.pause('Game')
  }
  destroy () {
    this.scene.gameScene.blur(false)
    this.scene.scene.resume('Game')
    super.destroy()
  }
}
