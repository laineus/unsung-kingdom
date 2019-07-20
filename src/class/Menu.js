import config from '../data/config'
export default class Menu extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    scene.add.existing(this)
    this.window = scene.add.rectangle(20, 20, config.WIDTH - 40, config.HEIGHT - 40, 0x000000, 0.7).setOrigin(0, 0).setInteractive()
    this.window.on('pointerdown', () => {
      this.destroy()
    })
    this.add(this.window)
    scene.scene.pause('Game')
  }
  destroy () {
    this.scene.scene.resume('Game')
    super.destroy()
  }
}
