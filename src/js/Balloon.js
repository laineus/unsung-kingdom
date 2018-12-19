export default class Balloon extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    scene.add.existing(this)
    const window = scene.add.ellipse(0, 0, 20, 15, 0xffffff).setOrigin(0.5, 1)
    const tri = scene.add.triangle(0, -2, 0, 0, 6, 0, 3, 5, 0xffffff).setOrigin(0.5, 0)
    const text = scene.add.text(0, -7, 'Talk', { fill: '#555', fontSize: 13, lineSpacing: 13 }).setOrigin(0.5, 0.5).setScale(0.5, 0.5)
    this.setSize(30, 50)
    this.setInteractive()
    this.add([window, tri, text])
  }
}
