import Character from './Character'
export default class Friend extends Character {
  constructor (scene, x, y, key, option) {
    super(scene, x, y, key, option)
    this.setTarget(scene.player)
    this.setFollowDiff(20)
    this.player = scene.player
    this.body.setDrag(700)
  }
  setFollowDiff (v) {
    this.followDiff = v
    return this
  }
  get followingX () {
    return this.player.positionHistory[this.followDiff][0]
  }
  get followingY () {
    return this.player.positionHistory[this.followDiff][1]
  }
}
