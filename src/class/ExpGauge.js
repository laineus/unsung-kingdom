import config from '../data/config'
import expTable from '../data/expTable'
export default class ExpGauge extends Phaser.GameObjects.Container {
  constructor (scene, x, y, width, lv, exp) {
    super(scene)
    this.scene = scene
    this.lv = lv
    this.exp = exp
    scene.add.existing(this)
    this.setPosition(x, y)
    this.bg = scene.add.rectangle(-width.half, 0, width, 1, config.COLORS.soy).setOrigin(0, 0.5)
    this.bar = scene.add.rectangle(-width.half, 0, width - 11, 2, config.COLORS.soy).setOrigin(0, 1).setScale(this.barScale, 1)
    this.arrow = scene.add.polygon(width.half - 1, 5, [[0, -5], [0, 0], [10, 0]], config.COLORS.soy).setOrigin(1, 1)
    this.label = this.scene.add.text(-width.half, -4, 'EXP', { fill: config.COLORS.soy.toColorString, fontSize: 11, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(0, 1)
    this.add([this.bg, this.bar, this.arrow, this.label])
  }
  get value () {
    return this.exp - this.offset
  }
  get barScale () {
    return this.value / this.valueMax
  }
  get offset () {
    return expTable[this.lv - 1]
  }
  get valueMax () {
    return expTable[this.lv] - this.offset
  }
  get next () {
    return this.valueMax - this.value
  }
  addExp (add) {
    const thisTimeAdd = Math.fix(add, 0, this.next)
    const thisTimeSum = this.value + thisTimeAdd
    const scaleX = Math.fix(thisTimeSum / this.valueMax, 0, 1)
    const diff = scaleX - this.bar.scaleX
    this.scene.add.tween({
      targets: this.bar, duration: 1000 * diff, ease: 'Power2',
      scaleX,
      onComplete: () => {
        if (thisTimeSum === this.valueMax) {
          this.lv++
          this.exp += thisTimeAdd
          this.bar.scaleX = 0
          this.emit('lvUp', this.lv)
        }
        const nextAdd = add - thisTimeAdd
        if (nextAdd > 0) {
          this.addExp(nextAdd)
        } else {
          this.emit('completed')
        }
      }
    })
  }
}
