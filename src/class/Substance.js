import config from '../data/config'
import Baloon from './Balloon'
export default class Substance extends Phaser.GameObjects.Container {
  constructor (scene, x, y, key = null) {
    super(scene, x, y)
    this.scene = scene
    this.key = key
    this.image = key ? scene.add.sprite(0, 0, key) : scene.add.rectangle(0, 0, config.TILE_SIZE, config.TILE_SIZE, 0xff0000)
    this.setSize(this.image.width, this.image.height)
    this.add(this.image)
    scene.physics.world.enable(this)
    scene.add.existing(this)
    this.body.setDrag(300)
  }
  update () {
    if (this.talkBalloon) this.talkBalloon.visible = this.distanceToPlayer < 60
  }
  setTalk () {
    this.talkBalloon = new Baloon(this.scene).setPosition(0, -8)
    this.talkBalloon.on('pointerdown', this.talk.bind(this))
    this.add(this.talkBalloon)
  }
  talk (pointer) {
    pointer.touchcancel()
    this.scene.player.setTargetPosition()
    this.scene.scene.get('UI').talk.speak()
  }
  distanceTo (target) {
    return Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y)
  }
  get distanceToPlayer () {
    return this.distanceTo(this.scene.player)
  }
}
