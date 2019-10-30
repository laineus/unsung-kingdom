import Character from './Character'
import config from '../data/config'
export default class Player extends Character {
  constructor (scene, x, y) {
    super(scene, x, y, 'player', { width: config.TILE_SIZE, height: config.TILE_SIZE })
    this.targetMarker = scene.add.sprite(0, 0, 'focus').setOrigin(0.5, 0.5).setScale(0).setAlpha(0)
    this.targetMarker.anim = this.scene.add.tween({
      targets: this.targetMarker,
      duration: 800,
      ease: 'Power2',
      scale: 0.5,
      alpha: 0.7,
      loop: 100
    })
    this.targetMarker.blendMode = 1
    this.addAt(this.targetMarker, 0)
    this.setSpeed(240)
  }
  preUpdate () {
    super.preUpdate()
    if (!this.targetMarker.visible && this.hasTargetPosition) this.targetMarker.anim.seek(0)
    this.targetMarker.visible = this.hasTargetPosition
    this.targetMarker.setPosition(this.diffToFollowingX, this.diffToFollowingY)
    this.scene.storage.state.map = this.scene.map.name
    this.scene.storage.state.x = this.x
    this.scene.storage.state.y = this.y
    this.scene.storage.state.r = this.r
    if (this.walking) this.emit('walk')
  }
}
