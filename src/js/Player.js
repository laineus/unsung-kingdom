export default class Player extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'player')
    scene.physics.world.enable(this)
    scene.add.existing(this)
    scene.anims.create({ key: 'walkDown', frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 2 }), repeat: -1, frameRate: 5 })
    scene.anims.create({ key: 'walkLeft', frames: scene.anims.generateFrameNumbers('player', { start: 3, end: 5 }), repeat: -1, frameRate: 5 })
    scene.anims.create({ key: 'walkRight', frames: scene.anims.generateFrameNumbers('player', { start: 6, end: 8 }), repeat: -1, frameRate: 5 })
    scene.anims.create({ key: 'walkUp', frames: scene.anims.generateFrameNumbers('player', { start: 9, end: 11 }), repeat: -1, frameRate: 5 })
  }
  update () {
    this._walkToTargetPosition()
  }
  setTargetPosition (x, y) {
    this._targetPositionX = x
    this._targetPositionY = y
  }
  get diffToTargetPositionX () {
    return this._targetPositionX ? this._targetPositionX - this.x : 0
  }
  get diffToTargetPositionY () {
    return this._targetPositionY ? this._targetPositionY - this.y : 0
  }
  _walkToTargetPosition () {
    this.body.setVelocity(0)
    if (Math.hypot(this.diffToTargetPositionX, this.diffToTargetPositionY) < 1) {
      if (this.anims.currentAnim) this.setFrame(this.anims.currentAnim.frames[1].textureFrame)
      return
    }
    this.body.setVelocityX(this.diffToTargetPositionX)
    this.body.setVelocityY(this.diffToTargetPositionY)
    this.body.velocity.normalize().scale(100)
    if (Math.abs(this.body.velocity.x) > Math.abs(this.body.velocity.y)) {
      this.anims.play(this.body.velocity.x > 0 ? 'walkRight' : 'walkLeft', true)
    } else {
      this.anims.play(this.body.velocity.y > 0 ? 'walkDown' : 'walkUp', true)
    }
  }
}
