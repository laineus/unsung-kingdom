export default class Character extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y, key) {
    super(scene, x, y, key)
    this.key = key
    scene.physics.world.enable(this)
    scene.add.existing(this)
    this.body.setDrag(300)
  }
  update () {
    this._walkToTargetPosition()
    this._updateAnimation()
  }
  setTargetPosition (x = null, y = null) {
    this._targetPositionX = x
    this._targetPositionY = y
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
  _walkToTargetPosition () {
    if (!this._targetPositionX || !this._targetPositionY) return
    this.body.setVelocity(this.diffToTargetPositionX, this.diffToTargetPositionY)
    this.body.velocity.normalize().scale(100)
    if (Math.hypot(this.diffToTargetPositionX, this.diffToTargetPositionY) < 5) this.setTargetPosition()
  }
  _updateAnimation () {
    if (!this.walking) {
      if (this.anims.currentAnim) this.setFrame(this.anims.currentAnim.frames[1].textureFrame)
    } else if (Math.abs(this.body.velocity.x) > Math.abs(this.body.velocity.y)) {
      this.anims.play(this.body.velocity.x > 0 ? `${this.key}_walk_right` : `${this.key}_walk_left`, true)
    } else {
      this.anims.play(this.body.velocity.y > 0 ? `${this.key}_walk_down` : `${this.key}_walk_up`, true)
    }
  }
}
