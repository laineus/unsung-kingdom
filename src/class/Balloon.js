import config from '../data/config'
export default class Balloon extends Phaser.GameObjects.Container {
  constructor (scene, balloonText = '！') {
    super(scene)
    this.scene = scene
    scene.add.existing(this)
    const window = scene.add.ellipse(0, 0, 25, 25, config.COLORS.white)
    const tri = scene.add.triangle(0, 13, 0, 0, 10, 0, 5, 6, config.COLORS.white)
    const text = scene.add.text(0, 0, balloonText, { fill: '#666', fontSize: 17, fontStyle: 'bold', lineSpacing: 13 }).setOrigin(0.5, 0.5)
    this.add([window, tri, text])
  }
}
