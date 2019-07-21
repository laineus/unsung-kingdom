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
    this.window = scene.add.polygon(0, 0, [[0, 0], [(150).byRight, 0], [(200).byRight, (0).byBottom], [0, (0).byBottom]], 0x000000, 0.7).setOrigin(0, 0).setInteractive()
    this.add([this.bg, this.window])
    this.buttons = (4).toArray.map(i => this.button((15).byRight, i * 115 + 15))
    this.add(this.buttons)
    this.scene.gameScene.blur(true)
    scene.scene.pause('Game')
  }
  destroy () {
    this.scene.gameScene.blur(false)
    this.scene.scene.resume('Game')
    super.destroy()
  }
  button (x, y) {
    const button = this.scene.add.sprite(x, y, 'circle').setAlpha(0.7).setOrigin(1, 0).setScale(0.100, 0.100)
    return button
  }
}
