import Button from './Button'
import config from '../data/config'
const WIDTH = 240
const HEIGHT = 40
const MERGIN = 15
export default class Select extends Phaser.GameObjects.Container {
  constructor (scene, optionTexts, callback) {
    super(scene)
    this.scene = scene
    this.callback = callback
    this.optionTexts = optionTexts
    scene.add.existing(this)
    this.options = optionTexts.map((text, i) => {
      const x = config.WIDTH - WIDTH.half - 35
      const y = (config.HEIGHT - this.sumHeight - 20) + ((HEIGHT + MERGIN) * i)
      return this.option(text, i, x, y)
    })
    this.add(this.scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT).setOrigin(0, 0).setInteractive())
    this.add(this.options)
  }
  option (text, i, x, y) {
    return new Button(this.scene, x, y, text, WIDTH, HEIGHT, { align: 'left', fontSize: 16 }).on('click', () => {
      this.destroy()
      if (this.callback) this.callback(i)
    })
  }
  get sumHeight () {
    return (this.optionTexts.length * HEIGHT) + ((this.optionTexts.length - 1) * MERGIN)
  }
}
