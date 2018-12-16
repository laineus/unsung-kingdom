const PADDING = 20
export default class Talk extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    this.setPosition(this.left, this.top)
    scene.add.existing(this)
    this.speaking = false
    scene.input.on('pointerdown', () => {
      if (this.speaking) this.end()
    })
  }
  speak () {
    this.speaking = true
    this.scene.scene.pause('Game')
    const image = this.scene.add.sprite(200, 10, 'chara1').setScale(-1, 1)
    const window = this.scene.add.rectangle(0, 0, this.width, this.height, 0x000000, 100).setOrigin(0, 0)
    const text = this.scene.add.text(18, 18, 'こんにちは。わたしは犬です。ワンワン。\nさようなら。', { fontSize: 18, lineSpacing: 13 })
    this.add([image, window, text])
  }
  end () {
    this.removeAll()
    this.speaking = false
    this.scene.scene.resume('Game')
  }
  get width () { return this.scene.game.config.width - PADDING * 2 }
  get height () { return this.scene.game.config.height / 4 }
  get top () { return this.scene.game.config.height - this.height - PADDING }
  get left () { return PADDING }
  get right () { return this.scene.game.config.width - PADDING }
}
