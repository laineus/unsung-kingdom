import Gauge from './Gauge'
import config from '../data/config'
export default class Slider extends Gauge {
  constructor (scene, x, y, width, height, option) {
    super(scene, width, height, option)
    this.scene = scene
    this.setPosition(x, y)
    this.activePointer = false
    this.button = scene.add.circle(0, 0, 10, config.COLORS.gray).setStrokeStyle(1, config.COLORS.ghost)
    this.button.setInteractive().on('pointerdown', pointer => {
      this.activePointer = pointer
    })
    this.setInteractive().on('pointerdown', pointer => {
      this.setValueOfPointer(pointer)
      this.activePointer = pointer
    })
    this.add(this.button)
    this.setButtonX()
  }
  preUpdate () {
    if (this.activePointer) {
      this.setValueOfPointer(this.activePointer)
      if (!this.activePointer.isDown) this.activePointer = null
    }
  }
  setValueOfPointer (pointer) {
    const pointerX = pointer.position.x
    const leftX = this.screenX + (this.width * -this.originX)
    const scale = Math.fix(pointerX - leftX, 0, this.width) / this.width
    const v = this.valueMax * scale
    this.value = v
    this.setButtonX()
    this.emit('updated', v)
  }
  setButtonX () {
    const left = this.width * -this.originX
    const x = this.width * this.barScale
    this.button.x = left + x
  }
  get screenX () {
    const getX = (gameObject, x) => {
      if (!gameObject.parentContainer) return x
      return getX(gameObject.parentContainer, x + gameObject.parentContainer.x)
    }
    return getX(this, this.x)
  }
}
