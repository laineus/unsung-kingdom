export default class Character extends Phaser.GameObjects.Container {
  constructor (scene, x, y, key) {
    super(scene, x, y)
    this.key = key
    this.image = scene.add.sprite(0, 0, key)
    this.setSize(this.image.width, this.image.height)
    this.add(this.image)
    scene.physics.world.enable(this)
    scene.add.existing(this)
    this.body.setDrag(300)
    this.body.setCollideWorldBounds(true)
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
      if (this.image.anims.currentAnim) this.image.setFrame(this.image.anims.currentAnim.frames[1].textureFrame)
    } else if (Math.abs(this.body.velocity.x) > Math.abs(this.body.velocity.y)) {
      this.image.anims.play(this.body.velocity.x > 0 ? `${this.key}_walk_right` : `${this.key}_walk_left`, true)
    } else {
      this.image.anims.play(this.body.velocity.y > 0 ? `${this.key}_walk_down` : `${this.key}_walk_up`, true)
    }
  }
}
