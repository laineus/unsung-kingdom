import config from '../data/config'
import Baloon from './Balloon'
import Gauge from './Gauge'
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
    this.body.setDrag(500)
  }
  get hp () {
    return this._hp
  }
  set hp (hp) {
    if (hp < 0) hp = 0
    if (hp > this.maxHp) hp = this.maxHp
    this._hp = hp
    this.hpGauge.value = this._hp
  }
  setHp (hp) {
    this.hpGauge = new Gauge(this.scene, 32, 4, hp).setPosition(0, -40)
    this.add(this.hpGauge)
    this.maxHp = hp
    this.hp = hp
  }
  preUpdate () {
    this.setDepth(this.y)
    if (this.balloon) this.balloon.visible = this.distanceToPlayer < 150
  }
  setEvent (callback) {
    this.balloon = new Baloon(this.scene).setPosition(0, -30)
    this.balloon.on('pointerdown', callback)
    this.add(this.balloon)
  }
  setTalk () {
    this.setEvent(pointer => {
      pointer.touchcancel()
      this.scene.player.setTargetPosition()
      this.scene.scene.get('UI').talk.speak()
    })
  }
  distanceTo (target) {
    return Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y)
  }
  rayCast (x, y, speed = 20) {
    const distanceDiff = Math.hypot(x - this.x, y - this.y)
    const count = Math.floor(distanceDiff / speed)
    const radian = Math.atan2(y - this.y, x - this.x)
    const xSpeed = Math.cos(radian) * speed
    const ySpeed = Math.sin(radian) * speed
    return count.toArray.some(i => {
      const tileX = (this.x + (xSpeed * (i + 1))).toTile
      const tileY = (this.y + (ySpeed * (i + 1))).toTile
      return this.scene.map.staticLayers.some(layer => {
        const tile = layer.getTileAt(tileX, tileY)
        return tile && tile.collides
      })
    })
  }
  get distanceToPlayer () {
    return this.distanceTo(this.scene.player)
  }
}
