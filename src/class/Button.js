import Box from './Box'
export default class Button extends Phaser.GameObjects.Container {
  constructor (scene, x, y, text, width = 120, height = 80, option = {}) {
    super(scene, x, y)
    const bg = new Box(scene, 0, 0, width, height, { color: 0x000000, lineColor: 0xffffff }).setOrigin(0, 0)
    const tx = scene.add.text(width.half, height.half, text, { align: 'center', fontFamily: 'Ubuntu' }).setOrigin(0.5, 0.5).setPadding(0, 2, 0, 0)
    this.add([bg, tx])
  }
}
