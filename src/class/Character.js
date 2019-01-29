import Substance from './Substance'
import assets from '../data/assets'
export default class Character extends Substance {
  constructor (scene, x, y, key) {
    super(scene, x, y, key)
    this.setTarget(null)
    this.setAttackRange()
    this.setSpeed(120)
    this.setAttackDelay()
    this.r = 0
  }
  preUpdate () {
    super.preUpdate()
    this._walkToTargetPosition()
    this._attackToTarget()
    this._updateAnimation()
    this._calcRotation()
  }
  setTarget (target = null) {
    this.unsetFollowing()
    this.target = target
  }
  setTargetPosition (x = null, y = null) {
    if (x !== null && y !== null && this.scene.map.isCollides(x.toTile, y.toTile)) return
    this.unsetFollowing()
    this._targetPositionX = x
    this._targetPositionY = y
  }
  unsetFollowing () {
    this.target = null
    this._targetPositionX = null
    this._targetPositionY = null
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
  _calcRotation () {
    if (!this.walking) return
    this.r = Math.atan2(this.body.velocity.y, this.body.velocity.x)
  }
  _walkToTargetPosition () {
    if (!this.followingTarget) return
    if (this.enemyInAttackRange) return
    this.attackDelay = this.attackDelayFirst
    const x = (!this.body.blocked.left && !this.body.blocked.right) ? this.diffToFollowingX : 0
    const y = (!this.body.blocked.top && !this.body.blocked.down) ? this.diffToFollowingY : 0
    this.body.setVelocity(x, y)
    const speed = Math.min(this.speed, (this.diffToFollowingDistance * 10))
    this.body.velocity.normalize().scale(speed)
    if (this.diffToFollowingDistance < 5) this.unsetFollowing()
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
    } else {
      this.image.anims.play(this._animName, true)
      if (this.frameLength === 6) this.image.setScale(this.body.velocity.x < 0 ? 1 : -1, 1)
    }
  }
  get frameLength () {
    return assets.spritesheet.find(v => v[0] === this.key)[2].endFrame
  }
  get _animName () {
    if (this.frameLength === 12) {
      if (this.movingHorizontal) {
        return this.body.velocity.x < 0 ? `${this.key}_walk_left` : `${this.key}_walk_right`
      } else {
        return this.body.velocity.y < 0 ? `${this.key}_walk_up` : `${this.key}_walk_down`
      }
    } else if (this.frameLength === 6) {
      return this.body.velocity.y < 0 ? `${this.key}_walk_back` : `${this.key}_walk_front`
    }
  }
}
