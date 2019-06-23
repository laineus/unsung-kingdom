import Box from './Box'
export default class Button extends Phaser.GameObjects.Container {
  constructor (scene, x, y, text, width = 120, height = 80, option = {}) {
    super(scene, x, y)
    this.setSize(width, height).setInteractive()
    const bgLight = new Box(scene, -4, 4, width, height, { color: 0xAACC22, alpha: 1 }).setOrigin(0.5, 0.5)
    bgLight.visible = false
    const bg = new Box(scene, 0, 0, width, height, { color: 0x000000, lineColor: 0xffffff }).setOrigin(0.5, 0.5)
    const tx = scene.add.text(0, 0, text, { align: 'center', fontFamily: 'Ubuntu' }).setOrigin(0.5, 0.5).setPadding(0, 2, 0, 0)
    this.add([bgLight, bg, tx])
    this.on('pointerover', () => {
      bgLight.visible = true
    })
    this.on('pointerout', () => {
      bgLight.visible = false
    })
  }
}
