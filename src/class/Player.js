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
  setLamp (bool, object) {
    if (this.lamp) {
      if (bool) return
      this.lamp.destroy()
      object.clearMask(true)
      return
    }
    const mask = this.scene.make.graphics().fillCircle(0, 0, 100).createGeometryMask()
    this.lamp = this.getLamp()
    this.lamp.preUpdate = () => {
      mask.geometryMask.x = this.x
      mask.geometryMask.y = this.y
    }
    this.add(this.lamp)
    object.setMask(mask)
  }
  getLamp () {
    const lamp = this.scene.add.sprite(0, 0, 'field/magic_lamp').setScale(1.1).setAlpha(0.7).setRotation(-Math.PI).setTint('#ff0000'.toColorInt)
    lamp.blendMode = 1
    lamp.color = 0
    lamp.colorBool = true
    this.scene.add.tween({
      targets: lamp,
      duration: 5000,
      loop: -1,
      rotation: Math.PI,
      onUpdate () {
        lamp.color += lamp.colorBool ? 1 : -1
        if (lamp.color <= 0 || lamp.color >= 255) lamp.colorBool = !lamp.colorBool
        const g = lamp.color.toString(16).padStart(2, 0)
        const b = (255 - lamp.color).toString(16).padStart(2, 0)
        lamp.setTint(`#FF${g}${b}`.toColorInt)
      }
    })
    return lamp
  }
}
