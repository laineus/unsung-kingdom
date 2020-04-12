import Character from './Character'
import config from '../data/config'
export default class Player extends Character {
  constructor (scene, x, y) {
    super(scene, x, y, 'player', { width: config.TILE_SIZE, height: config.TILE_SIZE })
    this.targetMarker = scene.add.sprite(0, 0, 'focus').setOrigin(0.5, 0.5).setScale(0).setAlpha(0)
    this.targetMarker.anim = this.scene.add.tween({
      targets: this.targetMarker,
      duration: 600,
      ease: 'Power2',
      scale: 0.4,
      alpha: 0.5,
      loop: 100
    })
    this.targetMarker.blendMode = 1
    this.addAt(this.targetMarker, 0)
    this.setSpeed(240)
    const pos = [x, y]
    this.positionHistory = (100).toArray().fill(pos)
  }
  preUpdate () {
    super.preUpdate()
    if (!this.targetMarker.visible && this.hasTargetPosition) this.targetMarker.anim.seek(0)
    this.targetMarker.setVisible(this.hasTargetPosition && !this.scene.touchMode && !this.scene.ui.eventMode)
    this.targetMarker.setPosition(this.diffToFollowingX, this.diffToFollowingY)
    this.scene.storage.state.map = this.scene.map.name
    this.scene.storage.state.x = this.x
    this.scene.storage.state.y = this.y
    this.scene.storage.state.r = this.r
    if (this.walking) {
      this.emit('walk')
      this.positionHistory.unshift([this.x, this.y])
      if (this.positionHistory.length > 100) this.positionHistory.pop()
    }
  }
  setPosition (x, y) {
    if (this.positionHistory) this.positionHistory.fill([x, y])
    return super.setPosition(x, y)
  }
}
