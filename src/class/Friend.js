import Character from './Character'
import TweetBubble from './TweetBubble'
export default class Friend extends Character {
  constructor (scene, x, y, key, option) {
    super(scene, x, y, key, option)
    this.setTarget(scene.player)
    this.setFollowDiff(20)
    this.player = scene.player
    this.body.setDrag(700)
    this.setAllowWalkingWhileEvent(false)
    this.tweetBubble = new TweetBubble(scene, x, y - 60, 'テストテスト').setDepth(99999999)
  }
  preUpdate () {
    super.preUpdate()
    this.tweetBubble.setPosition(this.x, this.y - 60)
  }
  _walkToTargetPosition () {
    if (this.scene.ui.eventMode && !this.allowWalkingWhileEvent) return
    super._walkToTargetPosition()
  }
  setFollowDiff (v) {
    this.followDiff = v
    return this
  }
  setAllowWalkingWhileEvent (bool) {
    this.allowWalkingWhileEvent = bool
  }
  get followingX () {
    return this.player.positionHistory[this.followDiff][0]
  }
  get followingY () {
    return this.player.positionHistory[this.followDiff][1]
  }
}
