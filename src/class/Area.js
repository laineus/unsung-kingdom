export default class Area extends Phaser.GameObjects.Zone {
  constructor (scene, zoneX, zoneY, zoneWidth, zoneHeight) {
    super(scene, zoneX, zoneY, zoneWidth, zoneHeight)
    this.setOrigin(0, 0)
    this.lastEnteredFrame = 0
    scene.physics.world.enable(this)
    scene.physics.add.overlap(this, scene.player, () => {
      const newEntered = this.lastEnteredFrame < (scene.frame - 2)
      this.lastEnteredFrame = scene.frame
      if (!newEntered) return
      if (this.event && this.active) {
        scene.ui.setEventMode(this.eventMode)
        this.event().then(() => scene.ui.setEventMode(false))
      }
    })
    this.setActive(true)
  }
  setEvent (callback, eventMode = true) {
    this.event = callback
    this.eventMode = eventMode
    return this
  }
  setId (id) {
    this.id = id
    return this
  }
}
