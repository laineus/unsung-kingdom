import Substance from './Substance'
import TweetBubble from './TweetBubble'
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
    this.setFaceKey(this.key)
    this.setTalking(false)
    this.tweetBubble = new TweetBubble(scene).setDepth(200000)
  }
  preUpdate () {
    super.preUpdate()
    this._walkToTargetPosition()
    this._calcRotation()
    this._updateAnimation()
    this._randomWalk()
    this._collideWall()
    this.tweetBubble.setPosition(this.x, this.y - 60)
  }
  setDisplayName (name) {
    this.displayName = name
    return this
  }
  setFaceKey (name) {
    this.faceKey = name
    return this
  }
  setTarget (target = null, leave = false) {
    this.unsetFollowing()
    this.target = target
    this.leaveFromTarget = leave
    return this
  }
  setTargetPosition (x = null, y = null) {
    this.unsetFollowing()
    this._targetPositionX = x
    this._targetPositionY = y
    if (this._targetPositionResolve) this._targetPositionResolve()
    return new Promise(resolve => {
      this._targetPositionResolve = resolve
    })
  }
  unsetFollowing () {
    // this.target = null
    this._targetPositionX = null
    this._targetPositionY = null
  }
  stopWalk () {
    this.unsetFollowing()
    this.body.setVelocity(0, 0)
    return this
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
  getBalloon () {
    return super.getBalloon('bubble_talk')
  }
  tweet (text) {
    this.tweetBubble.setText(text)
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
    if (this.hasTarget && !this.leaveFromTarget && (this.diffToFollowingDistance < 50 || this.diffToFollowingDistance > 400)) return
    if (this.hasTarget && this.leaveFromTarget && this.diffToFollowingDistance > 200) return
    const diffToFollowingX = (this.hasTarget && this.leaveFromTarget) ? -this.diffToFollowingX : this.diffToFollowingX
    const diffToFollowingY = (this.hasTarget && this.leaveFromTarget) ? -this.diffToFollowingY : this.diffToFollowingY
    const x = (!this.body.blocked.left && !this.body.blocked.right) ? diffToFollowingX : diffToFollowingX * 0.1
    const y = (!this.body.blocked.top && !this.body.blocked.down) ? diffToFollowingY : diffToFollowingY * 0.1
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
      if (this.frameLength === 3) this.image.anims.play(this._waitAnimName, true)
      if (this.frameLength === 12) this.image.setFrame(this.angleFrame)
    } else {
      this.image.anims.play(this._animName, true)
      if (this.frameLength === 6) this.image.setScale(this.body.velocity.x < 0 ? 1 : -1, 1)
    }
  }
  get frameLength () {
    return assets.spritesheet.find(v => v[0] === this.spriteKey)[2].endFrame
  }
  get _waitAnimName () {
    return `${this.key}_waiting`
  }
  get _animName () {
    if (this.frameLength === 12) {
      return `${this.key}_walk_${this.angleKey}`
    } else if (this.frameLength === 6) {
      return this.body.velocity.y < 0 ? `${this.key}_walk_back` : `${this.key}_walk_front`
    }
    return this._waitAnimName
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
  setTalking (bool) {
    this.talking = bool
    return this
  }
  _randomWalk () {
    if (!this.randomWalk || this.talking) return
    if (!this.walking || !this.body.blocked.none) this.randomWalkDelay--
    if (this.randomWalkDelay <= 0) {
      const pos = this._tryToGetRandomPosition()
      if (pos) this.setTargetPosition(pos.x, pos.y)
      this.setNextRandomWalkDelay()
    }
  }
  _tryToGetRandomPosition (count = 10) {
    if (!count) return null
    const x = this.x + Math.randomInt(-this.randomWalkRange, this.randomWalkRange)
    const y = this.y + Math.randomInt(-this.randomWalkRange, this.randomWalkRange)
    const collides = this.scene.map.isCollides(x.toTile, y.toTile)
    return collides ? this._tryToGetRandomPosition(count - 1) : { x, y }
  }
  _collideWall () {
    if (this.walking) {
      const distance = Phaser.Math.Distance.Between(this.x, this.y, this.lastX, this.lastY)
      if (distance > 0 && distance < 0.15) this.stopWalk()
    }
    this.lastX = this.x
    this.lastY = this.y
  }
  die () {
    return new Promise(resolve => {
      this.image.setTint(0xFF0000)
      this.scene.add.tween({
        targets: this, duration: 500, ease: 'Power2',
        scaleX: 1.3, scaleY: 1.3, alpha: 0.2,
        onComplete: () => {
          this.destroy()
          resolve()
        }
      })
    })
  }
}
