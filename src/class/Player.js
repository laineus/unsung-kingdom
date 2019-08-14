import Character from './Character'
import config from '../data/config'
export default class Player extends Character {
  constructor (scene, x, y) {
    super(scene, x, y, 'player', { width: config.TILE_SIZE, height: config.TILE_SIZE })
    this.targetMarker = scene.add.circle(0, 0, 5, 0xAA0000, 0.5)
    this.add(this.targetMarker)
    this.setSpeed(240)
  }
  preUpdate () {
    super.preUpdate()
    this.targetMarker.visible = this.hasTargetPosition
    this.targetMarker.setPosition(this.diffToFollowingX, this.diffToFollowingY)
    this.scene.storage.state.map = this.scene.map.name
    this.scene.storage.state.x = this.x
    this.scene.storage.state.y = this.y
    this.scene.storage.state.r = this.r
    if (this.walking) this.emit('walk')
    this.collideWall()
  }
  collideWall () {
    if (this.walking) {
      const distance = Phaser.Math.Distance.Between(this.x, this.y, this.lastX, this.lastY)
      if (distance > 0 && distance < 0.15) this.stopWalk()
    }
    this.lastX = this.x
    this.lastY = this.y
  }
}
