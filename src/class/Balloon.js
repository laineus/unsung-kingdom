export default class Balloon extends Phaser.GameObjects.Container {
  constructor (scene, balloonText = '！') {
    super(scene)
    this.scene = scene
    scene.add.existing(this)
    const window = scene.add.ellipse(0, -18, 25, 25, 0xffffff).setOrigin(0.5, 1)
    const tri = scene.add.triangle(0, -19, 0, 0, 10, 0, 5, 6, 0xffffff).setOrigin(0.5, 0)
    const text = scene.add.text(0, -28, balloonText, { fill: '#666', fontSize: 17, fontStyle: 'bold', lineSpacing: 13 }).setOrigin(0.5, 0.5)
    this.setSize(40, 80)
    this.setInteractive()
    this.add([window, tri, text])
  }
}
