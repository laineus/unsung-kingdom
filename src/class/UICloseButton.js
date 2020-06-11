import config from '../data/config'
export default class UICloseButton extends Phaser.GameObjects.Container {
  constructor (scene, x, y) {
    super(scene)
    this.setSize(120, 50).setPosition(x, y)
    this.add(scene.add.rectangle(0, 0, 120, 50, config.COLORS.black).setAlpha(0))
    this.add(scene.add.text(15, -8, 'CLOSE', { align: 'center', fontSize: 20, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    this.add(scene.add.text(15, 11, '閉じる', { align: 'center', fontSize: 9, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    this.add(scene.add.rectangle(-35, 0, 30, 3, config.COLORS.theme).setRotation(Math.PI / 4))
    this.add(scene.add.rectangle(-35, 0, 30, 3, config.COLORS.theme).setRotation(Math.PI / -4))
    this.setInteractive().on('pointerdown', pointer => {
      pointer.isDown = false
      scene.audio.se('cancel')
      this.emit('click')
    })
  }
}
