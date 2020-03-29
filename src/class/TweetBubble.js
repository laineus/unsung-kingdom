import config from '../data/config'
const points = [[11,2],[43,0],[55,11],[46,22],[31,26],[27,32],[23,26],[9,22],[0,11]]
const pointTimes = [-0.5, 0.5, 0.5, 0.5, 0, 0, 0, -0.5, -0.5]
export default class TweenBubble extends Phaser.GameObjects.Container {
  constructor (scene, x = 0, y = 0) {
    super(scene, x, y)
    this.scene = scene
    this.bg = scene.add.polygon(0, 0, points, config.COLORS.black).setAlpha(0.7)
    this.text = scene.add.text(0, -6, '', { fill: config.COLORS.white.toColorString, fontSize: 11, fontFamily: config.FONTS.TEXT, lineSpacing: 4.5, stroke: config.COLORS.dark.toColorString, strokeThickness: 1.5 }).setOrigin(0.5, 0.5).setPadding(0, 2, 0, 0)
    this.add([this.bg, this.text])
    this.setVisible(false)
    scene.add.existing(this)
    this.timer = null
  }
  setText (text) {
    if (!this.visible) {
      this.setScale(0, 0).setAlpha(0)
      this.scene.add.tween({ targets: this, scaleX: 1, scaleY: 1, alpha: 1, duration: 150, ease: 'Power2' })
      this.setVisible(true)
    }
    clearTimeout(this.timer)
    this.timer = setTimeout(() => this.hide(), 3000)
    this.text.text = text
    this.bg.pathData = points.map((p, i) => {
      const textWidth = Math.max(0, text.width - 3) * 5.5
      const xAddition = textWidth * pointTimes[i]
      return [p[0] + xAddition, p[1]]
    }).flat()
  }
  hide () {
    this.scene.add.tween({ targets: this, scaleX: 0, scaleY: 0, alpha: 0, duration: 150, ease: 'Power2', onComplete: () => this.setVisible(false) })
  }
  destroy () {
    clearTimeout(this.timer)
    super.destroy()
  }
}
