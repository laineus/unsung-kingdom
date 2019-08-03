import Button from './Button'
const WIDTH = 240
const HEIGHT = 40
const MERGIN = 10
export default class Select extends Phaser.GameObjects.Container {
  constructor (scene, options, callback) {
    super(scene)
    this.scene = scene
    this.callback = callback
    scene.add.existing(this)
    scene.scene.pause('Game')
    this.options = options.map((text, i) => {
      this.add(this.option(text, i, 0, i * (HEIGHT + MERGIN)))
    })
    this.setPosition((20).byRight - WIDTH.half, (20).byBottom - this.yDiff)
  }
  option (text, i, x, y) {
    return new Button(this.scene, x, y, text, WIDTH, HEIGHT).on('click', () => {
      this.scene.scene.resume('Game')
      this.destroy()
      if (this.callback) this.callback(i)
    })
  }
  get yDiff () {
    return ((this.options.length * HEIGHT) - HEIGHT.half) + ((this.options.length - 1) * MERGIN)
  }
}
