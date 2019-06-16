import config from '../data/config'
import Enemy from './Enemy'
const positions = {
  1: [0],
  2: [-130, 130],
  3: [-240, 0, 240],
  4: [-340, -110, 110, 340],
  5: [-360, -180, 0, 180, 360],
}
export default class Battle extends Phaser.GameObjects.Container {
  constructor (scene, callback) {
    super(scene)
    this.scene = scene
    this.callback = callback
    scene.add.existing(this)
    scene.scene.pause('Game')
    this.window = this.scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x000000, 100).setOrigin(0, 0)
    this.enemies = this.scene.add.container(0, 0)
    this.add([this.window, this.enemies])
    // test image
    this.enemies.add(new Enemy(this.scene).setPosition(config.WIDTH.half, config.HEIGHT.half - 100))
    this.enemies.add(new Enemy(this.scene).setPosition(config.WIDTH.half, config.HEIGHT.half - 100))
    this.enemies.add(new Enemy(this.scene).setPosition(config.WIDTH.half, config.HEIGHT.half - 100))
  }
  preUpdate () {
    if (this.victory) this.end()
    this.enemies.list.forEach((v, i) => {
      v.x = config.WIDTH.half + positions[this.enemies.length][i]
    })
  }
  get victory () {
    return this.enemies.list.length === 0
  }
  end () {
    this.scene.scene.resume('Game')
    this.destroy()
    this.callback(this)
  }
}
