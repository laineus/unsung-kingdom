import Substance from './Substance'
export default class Character extends Substance {
  constructor (scene, x, y, key) {
    super(scene, x, y, key)
  }
  update () {
    super.update()
    this._walkToTargetPosition()
    this._updateAnimation()
  }
  setTargetPosition (x = null, y = null) {
    this._targetPositionX = x
    this._targetPositionY = y
  }
  get hasTargetPosition () {
    return this._targetPositionX !== null && this._targetPositionY !== null
  }
  get diffToTargetPositionX () {
    return this._targetPositionX ? this._targetPositionX - this.x : 0
  }
  get diffToTargetPositionY () {
    return this._targetPositionY ? this._targetPositionY - this.y : 0
  }
  get walking () {
    return Math.hypot(this.body.velocity.x, this.body.velocity.y) > 1
  }
  get movingHorizontal () {
    return Math.abs(this.body.velocity.x) > Math.abs(this.body.velocity.y)
  }
  _walkToTargetPosition () {
    if (!this.hasTargetPosition) return
    this.body.setVelocity(this.diffToTargetPositionX, this.diffToTargetPositionY)
    this.body.velocity.normalize().scale(240)
    if (Math.hypot(this.diffToTargetPositionX, this.diffToTargetPositionY) < 5) this.setTargetPosition()
  }
  _updateAnimation () {
    if (!this.walking) {
      if (this.image.anims.currentAnim) this.image.setFrame(this.image.anims.currentAnim.frames[1].textureFrame)
    } else if (this.movingHorizontal) {
      this.image.anims.play(this.body.velocity.x > 0 ? `${this.key}_walk_right` : `${this.key}_walk_left`, true)
    } else {
      this.image.anims.play(this.body.velocity.y > 0 ? `${this.key}_walk_down` : `${this.key}_walk_up`, true)
    }
  }
}
