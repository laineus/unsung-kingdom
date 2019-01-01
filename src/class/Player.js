import Character from './Character'
export default class Player extends Character {
  constructor (scene, x, y) {
    super(scene, x, y, 'player')
    this.targetMarker = scene.add.circle(0, 0, 5, 0xAA0000, 0.5)
    this.add(this.targetMarker)
  }
  update () {
    super.update()
    this.targetMarker.visible = this.hasTargetPosition
    this.targetMarker.setPosition(this.diffToFollowingX, this.diffToFollowingY)
  }
}
