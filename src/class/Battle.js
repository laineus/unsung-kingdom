import config from '../data/config'
export default class Battle extends Phaser.GameObjects.Container {
  constructor (scene, callback) {
    super(scene)
    this.scene = scene
    this.callback = callback
    scene.add.existing(this)
    scene.scene.pause('Game')
    this.window = this.scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x000000, 100).setOrigin(0, 0)
    this.images = this.scene.add.container(0, 0)
    // test image
    const sprite = this.scene.add.sprite(config.WIDTH.half, config.HEIGHT.half - 50, 'torrent')
    this.images.add(sprite)
    sprite.setScale(1)
  }
  end () {
    this.scene.scene.resume('Game')
    this.destroy()
    this.callback(this)
  }
}
