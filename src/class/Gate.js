export default class Gate extends Phaser.GameObjects.Zone {
  constructor (scene, key, x, y, zone_x, zone_y, zone_width, zone_height) {
    super(scene, zone_x, zone_y, zone_width, zone_height)
    this.setOrigin(0, 0)
    scene.physics.world.enable(this)
    scene.physics.add.overlap(this, scene.player, () => {
      if (!this.active) return
      scene.mapChange(key, x, y)
    })
    this.setActive(true)
  }
  setActive (bool) {
    this.active = bool
    return this
  }
  setId (id) {
    this.id = id
    return this
  }
}
