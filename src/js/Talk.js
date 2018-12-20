const PADDING = 20
const SAMPLE = [
  ['ann', 'francisca'],
  { chara: 'ann', text: 'こんにちは。わたしは犬です。ワンワン。\nさようなら。' },
  { chara: 'francisca', text: 'はいはいこんにちは。' },
  ['ann', 'francisca', 'jaquelyn'],
  { chara: 'jaquelyn', text: 'あなたも犬ですか。' },
  { chara: 'francisca', text: 'はいはい、私も犬です。' }
]
export default class Talk extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    this.setPosition(this.left, this.top)
    scene.add.existing(this)
    scene.input.on('pointerdown', () => {
      if (this.data) this.next()
    })
  }
  speak (data) {
    data = SAMPLE // debug
    this.data = data
    this.scene.scene.pause('Game')
    this.index = 0
    this.images = this.scene.add.container(0, 0)
    this.window = this.scene.add.rectangle(0, 0, this.width, this.height, 0x000000, 100).setOrigin(0, 0)
    this.text = this.scene.add.text(18, 18, '', { fontSize: 18, lineSpacing: 13 })
    this.add([this.images, this.window, this.text])
    this.next()
  }
  get current () {
    return (this.data && typeof this.index === 'number') ? this.data[this.index] : null
  }
  next () {
    if (!this.current) return this.end()
    if (Array.isArray(this.current)) {
      this.setImages(this.current)
      this.index++
      this.next()
    } else {
      this.text.text = this.current.text
      this.index++
    }
  }
  end () {
    this.removeAll()
    this.data = null
    this.index = null
    this.scene.scene.resume('Game')
  }
  setImages (array) {
    const x = (this.scene.game.config.width * 1.2) / (array.length + 1)
    array.forEach((name, i) => {
      const oldSprite = this.images.list.find(s => s.texture.key === name)
      const sprite = oldSprite || this.scene.add.sprite(0, 0, name)
      if (!oldSprite) this.images.add(sprite)
      sprite.x = (x * (i + 1)) - (this.scene.game.config.width * 0.1) - PADDING
      sprite.setScale(i < Math.floor(array.length / 2) ? -1 : 1, 1)
    })
  }
  get width () { return this.scene.game.config.width - PADDING * 2 }
  get height () { return this.scene.game.config.height / 4 }
  get top () { return this.scene.game.config.height - this.height - PADDING }
  get left () { return PADDING }
  get right () { return this.scene.game.config.width - PADDING }
}
