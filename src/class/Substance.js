import config from '../data/config'
import Baloon from './Balloon'
export default class Substance extends Phaser.GameObjects.Container {
  constructor (scene, x, y, key = null) {
    super(scene, x, y)
    this.scene = scene
    this.key = key
    this.image = key ? scene.add.sprite(0, 0, key) : scene.add.rectangle(0, 0, config.TILE_SIZE, config.TILE_SIZE)
    this.setSize(this.image.width, this.image.height)
    this.add(this.image)
    scene.physics.world.enable(this)
    scene.add.existing(this)
    this.body.setDrag(300)
  }
  update () {
    if (this.balloon) this.balloon.visible = this.distanceToPlayer < 60
  }
  setEvent (callback, balloonText) {
    this.balloon = new Baloon(this.scene, balloonText).setPosition(0, -8)
    this.balloon.on('pointerdown', callback)
    this.add(this.balloon)
  }
  setTalk () {
    this.setEvent(pointer => {
      pointer.touchcancel()
      this.scene.player.setTargetPosition()
      this.scene.scene.get('UI').talk.speak()
    }, 'Talk')
  }
  distanceTo (target) {
    return Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y)
  }
  get distanceToPlayer () {
    return this.distanceTo(this.scene.player)
  }
}
