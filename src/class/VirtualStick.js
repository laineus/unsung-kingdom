export default class VirtualStick extends Phaser.GameObjects.Container {
  constructor (scene, x, y,) {
    super(scene, x, y)
    this.scene = scene
    scene.add.existing(this)
    this.stick = null
    this.velocityX = 0
    this.velocityY = 0
    const padArea = this.scene.add.circle(0, 0, 80, 0x000000, 0.5).setInteractive()
    const pad = this.scene.add.circle(0, 0, 30, 0xFFFFFF, 0.25)
    this.add([padArea, pad])
    padArea.on('pointerdown', pointer => {
      this.stick = pointer
    })
    scene.input.on('pointermove', pointer => {
      if (this.stick === pointer) {
        this.velocityX = pointer.x - pointer.downX
        this.velocityY = pointer.y - pointer.downY
        const distance = Math.min(Phaser.Math.Distance.Between(pointer.downX, pointer.downY, pointer.x, pointer.y), 50)
        const r = Math.atan2(this.velocityY, this.velocityX)
        pad.setPosition(Math.cos(r) * distance, Math.sin(r) * distance)
      }
    })
    scene.input.on('pointerup', pointer => {
      if (this.stick === pointer) {
        this.stick = null
        this.velocityX = 0
        this.velocityY = 0
        pad.setPosition(0, 0)
      }
    })
  }
}
