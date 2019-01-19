import config from '../data/config'
const PADDING = 20
export default class Talk extends Phaser.GameObjects.Container {
  constructor (scene, events, callback) {
    super(scene)
    this.scene = scene
    this.events = events
    this.callback = callback
    this.index = 0
    this.setPosition(this.left, this.top)
    scene.add.existing(this)
    scene.scene.pause('Game')
    this.tapArea = this.scene.add.rectangle(-this.left, -this.top, config.WIDTH, config.HEIGHT).setOrigin(0, 0).setInteractive()
    this.tapArea.on('pointerdown', this.next.bind(this))
    this.images = this.scene.add.container(0, 0)
    this.window = this.scene.add.rectangle(0, 0, this.width, this.height, 0x000000, 100).setOrigin(0, 0)
    this.text = this.scene.add.text(18, 16, '', { fontSize: 18, lineSpacing: 13 }).setPadding(0, 2, 0, 0)
    this.windowName = this.scene.add.rectangle(0, 0, 200, 30, 0x000000, 100).setOrigin(0, 1)
    this.textName = this.scene.add.text(18, -20, '', { fontSize: 18, fontStyle: 'bold', fontFamily: 'Ubuntu', lineSpacing: 13 })
    this.add([this.tapArea, this.images, this.window, this.text, this.windowName, this.textName])
    this.next()
  }
  get current () {
    return (this.events && typeof this.index === 'number') ? this.events[this.index] : null
  }
  next () {
    if (!this.current) return this.end()
    if (Array.isArray(this.current)) {
      this.setImages(this.current)
      this.index++
      this.next()
    } else {
      this.images.list.forEach(image => {
        image.setTint(image.texture.key === this.current.name ? 0xffffff : 0x777777)
      })
      this.textName.text = this.current.name
      this.text.text = this.current.text
      this.index++
    }
  }
  end () {
    this.scene.scene.resume('Game')
    this.destroy()
    if (this.callback) this.callback()
  }
  setImages (array) {
    const x = (this.scene.game.config.width * 1.2) / (array.length + 1)
    array.forEach((name, i) => {
      const oldSprite = this.images.list.find(s => s.texture.key === name)
      const sprite = oldSprite || this.scene.add.sprite(0, 50, name)
      if (!oldSprite) this.images.add(sprite)
      sprite.x = (x * (i + 1)) - (this.scene.game.config.width * 0.1) - PADDING
      sprite.setScale(i < Math.ceil(array.length / 2) ? 1 : -1, 1)
    })
  }
  get width () { return this.scene.game.config.width - PADDING * 2 }
  get height () { return this.scene.game.config.height / 4 }
  get top () { return this.scene.game.config.height - this.height - PADDING }
  get left () { return PADDING }
  get right () { return this.scene.game.config.width - PADDING }
}
