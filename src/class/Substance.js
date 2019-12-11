import config from '../data/config'
export default class Substance extends Phaser.GameObjects.Container {
  constructor (scene, x, y, key = null, { width, height } = {}) {
    super(scene, x, y)
    this.scene = scene
    this.key = key
    this.image = key ? scene.add.sprite(0, 0, this.spriteKey) : scene.add.rectangle(0, 0, config.TILE_SIZE, config.TILE_SIZE)
    this.image.setPosition(0, -this.image.height.half)
    const w = width || this.image.width
    const h = height || this.image.height
    this.setSize(w, h)
    if (key) {
      this.shadow = scene.add.circle(0, h / -18, (w + h) / 8, config.COLORS.black, 0.3).setScale(1, 0.5)
      this.add(this.shadow)
    }
    this.add(this.image)
    scene.add.existing(this)
    scene.substances.add(this)
    scene.physics.world.enable(this)
    this.body.setDrag(300)
    this.setId(null)
  }
  preUpdate () {
    this.setDepth(this.y)
    if (this.balloon) {
      this.balloon.visible = this.distanceToPlayer < 150
      this.balloon.setPosition(this.x, this.y - this.image.height.half - 32)
    }
  }
  setId (id) {
    this.id = id
    return this
  }
  getBalloon (key = 'bubble_action') {
    const balloon = this.scene.add.container(0, 0).setDepth(200000)
    const img = this.scene.add.sprite(0, 0, key)
    this.scene.add.tween({ targets: img, duration: 400, loop: -1, yoyo: true, y: -4 })
    balloon.add(img)
    return balloon
  }
  setTapEvent (event) {
    const distance = 150
    this.tapArea = this.scene.add.rectangle(0, -this.image.height, this.image.width + 20, this.image.height + 50).setInteractive()
    this.add(this.tapArea)
    this.balloon = this.getBalloon()
    this.tapArea.on('pointerdown', (_pointer, _x, _y, e) => {
      if (this.distanceToPlayer >= distance) return
      e.stopPropagation()
      this.scene.ui.setEventMode(true)
      const ui = this.scene.ui
      event(this).then(() => ui.setEventMode(false))
    })
    return this
  }
  removeTapEvent() {
    this.tapArea.destroy()
    this.balloon.destroy()
    this.tapArea = null
    this.balloon = null
  }
  distanceTo (target) {
    return Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y)
  }
  angleTo (target) {
    return Math.atan2(target.y - this.y, target.x - this.x)
  }
  get distanceToPlayer () {
    return this.distanceTo(this.scene.player)
  }
  get spriteKey () {
    return `field/${this.key}`
  }
  destroy () {
    if (this.balloon) this.balloon.destroy()
    super.destroy()
  }
}
