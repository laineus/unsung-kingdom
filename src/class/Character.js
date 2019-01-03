import Substance from './Substance'
export default class Character extends Substance {
  constructor (scene, x, y, key) {
    super(scene, x, y, key)
    this.setTarget(null)
    this.setAttackRange()
    this.setSpeed(120)
    this.setAttackDelay()
  }
  preUpdate () {
    super.preUpdate()
    this._walkToTargetPosition()
    this._attackToTarget()
    this._updateAnimation()
  }
  setTarget (target = null) {
    this._targetPositionX = null
    this._targetPositionY = null
    this.target = target
  }
  setTargetPosition (x = null, y = null) {
    this.tartget = null
    this._targetPositionX = x
    this._targetPositionY = y
  }
  setAttackRange (range = 100) {
    this.attackRange = range
  }
  setAttackDelay (first = 60, interval = 120) {
    this.attackDelay = first
    this.attackDelayFirst = first
    this.attackDelayInterval = interval
  }
  setSpeed (speed = 120) {
    this.speed = speed
  }
  get followingEnemy () {
    return this.hasTarget && this.target.constructor.name !== this.constructor.name
  }
  get enemyInAttackRange () {
    return this.followingEnemy && this.diffToFollowingDistance < this.attackRange && !this.rayCast(this.target.x, this.target.y)
  }
  get hasTarget () {
    return this.target !== null
  }
  get hasTargetPosition () {
    return this._targetPositionX !== null && this._targetPositionY !== null
  }
  get followingTarget () {
    return this.hasTargetPosition || this.hasTarget
  }
  get followingX () {
    if (this.hasTargetPosition) return this._targetPositionX
    if (this.hasTarget) return this.target.x
    return null
  }
  get followingY () {
    if (this.hasTargetPosition) return this._targetPositionY
    if (this.hasTarget) return this.target.y
    return null
  }
  get diffToFollowingX () {
    return this.followingTarget ? this.followingX - this.x : 0
  }
  get diffToFollowingY () {
    return this.followingTarget ? this.followingY - this.y : 0
  }
  get diffToFollowingDistance () {
    return Math.hypot(this.diffToFollowingX, this.diffToFollowingY)
  }
  get walking () {
    return Math.hypot(this.body.velocity.x, this.body.velocity.y) > 1
  }
  get movingHorizontal () {
    return Math.abs(this.body.velocity.x) > Math.abs(this.body.velocity.y)
  }
  _walkToTargetPosition () {
    if (!this.followingTarget) return
    if (this.enemyInAttackRange) return
    this.attackDelay = this.attackDelayFirst
    this.body.setVelocity(this.diffToFollowingX, this.diffToFollowingY)
    this.body.velocity.normalize().scale(this.speed)
    if (this.diffToFollowingDistance < 5) this.setTargetPosition()
  }
  _attackToTarget() {
    if (!this.enemyInAttackRange) return
    if (this.attackDelay > 0) return this.attackDelay--
    // attack
    this.target.attackBy(this)
    this.attackDelay = this.attackDelayInterval
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
