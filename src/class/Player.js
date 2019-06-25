import Character from './Character'
export default class Player extends Character {
  constructor (scene, x, y) {
    super(scene, x, y, 'player')
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
    if (this.walking) this.emit('walk')
  }
}
