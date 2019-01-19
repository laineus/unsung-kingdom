export default class Select extends Phaser.GameObjects.Container {
  constructor (scene, options, callback) {
    super(scene)
    this.scene = scene
    this.callback = callback
    scene.add.existing(this)
    scene.scene.pause('Game')
    this.options = options.map((text, i) => {
      const opt = this.option(text, i).setPosition(0, i * 50)
      this.add(opt)
    })
  }
  option (text, i) {
    const option = this.scene.add.container(0, 0)
    const window = this.scene.add.rectangle(0, 0, 300, 44, 0x000000, 100).setOrigin(0, 0).setInteractive()
    const label = this.scene.add.text(18, 13, text, { fontSize: 18, lineSpacing: 13 }).setPadding(0, 2, 0, 0)
    option.add([window, label])
    window.on('pointerdown', pointer => {
      this.scene.scene.resume('Game')
      this.destroy()
      if (this.callback) this.callback(i)
    })
    return option
  }
}
