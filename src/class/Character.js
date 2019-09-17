import Substance from './Substance'
import assets from '../data/assets'
const angleData = {
  down: { frame: 1, r: Math.PI / 2 },
  left: { frame: 4, r: Math.PI },
  right: { frame: 7, r: 0 },
  up: { frame: 10, r: Math.PI / -2 }
}
export default class Character extends Substance {
  constructor (scene, x, y, key, option) {
    super(scene, x, y, key, option)
    this.setTarget(null)
    this.setSpeed(40)
    this.setR('down')
  }
  preUpdate () {
    super.preUpdate()
    this._walkToTargetPosition()
    this._calcRotation()
    this._updateAnimation()
    this._randomWalk()
    this._collideWall()
  }
  setDisplayName (name) {
    this.displayName = name
    return this
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
    if (this._targetPositionResolve) this._targetPositionResolve()
    return new Promise(resolve => {
      this._targetPositionResolve = resolve
    })
  }
  unsetFollowing () {
    this.target = null
    this._targetPositionX = null
    this._targetPositionY = null
  }
  stopWalk () {
    this.unsetFollowing()
    this.body.setVelocity(0, 0)
  }
  setSpeed (speed = 120) {
    this.speed = speed
    return this
  }
  setVelocity (x, y) {
    this.unsetFollowing()
    this.body.setVelocity(x, y)
    this.body.velocity.normalize().scale(this.speed)
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
    this.attackDelay = this.attackDelayFirst
    const x = (!this.body.blocked.left && !this.body.blocked.right) ? this.diffToFollowingX : 0
    const y = (!this.body.blocked.top && !this.body.blocked.down) ? this.diffToFollowingY : 0
    this.body.setVelocity(x, y)
    const speed = Math.min(this.speed, (this.diffToFollowingDistance * 10))
    this.body.velocity.normalize().scale(speed)
    if (this.diffToFollowingDistance < 5) {
      if (this._targetPositionResolve) {
        this._targetPositionResolve()
        this._targetPositionResolve = null
      }
      this.stopWalk()
    }
  }
  _updateAnimation () {
    if (!this.walking) {
      if (this.frameLength === 12) this.image.setFrame(this.angleFrame)
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
      return `${this.key}_walk_${this.angleKey}`
    } else if (this.frameLength === 6) {
      return this.body.velocity.y < 0 ? `${this.key}_walk_back` : `${this.key}_walk_front`
    }
  }
  get angleKey () {
    const x = Math.cos(this.r)
    const y = Math.sin(this.r)
    if (Math.abs(x) > Math.abs(y)) {
      return x < 0 ? 'left' : 'right'
    } else {
      return y < 0 ? 'up' : 'down'
    }
  }
  get angleFrame () {
    return angleData[this.angleKey].frame
  }
  setR (value) {
    this.r = typeof value === 'string' ? angleData[value].r : value
    this._updateAnimation()
    return this
  }
  setRandomWalk (bool, { speed, range = 50 } = {}) {
    this.randomWalk = bool
    this.randomWalkRange = Math.round(range / 2)
    if (speed) this.setSpeed(speed)
    this.setNextRandomWalkDelay()
    return this
  }
  setNextRandomWalkDelay () {
    this.randomWalkDelay = Math.randomInt(100, 200)
  }
  _randomWalk () {
    if (!this.randomWalk) return
    if (!this.walking) this.randomWalkDelay--
    if (this.randomWalkDelay <= 0) {
      this.setTargetPosition(this.x + Math.randomInt(-this.randomWalkRange, this.randomWalkRange), this.y + Math.randomInt(-this.randomWalkRange, this.randomWalkRange))
      this.setNextRandomWalkDelay()
    }
  }
  _collideWall () {
    if (this.walking) {
      const distance = Phaser.Math.Distance.Between(this.x, this.y, this.lastX, this.lastY)
      if (distance > 0 && distance < 0.15) this.stopWalk()
    }
    this.lastX = this.x
    this.lastY = this.y
  }
}
