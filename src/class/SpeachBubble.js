import { lineBreak } from '../util/stringFunctions'
import config from '../data/config'
const left = [[32, 10], [335, 0], [360, 65], [335, 105], [190, 102], [189, 110], [196, 122], [178, 110], [176, 101], [18, 94], [0, 40]]
const points = {
  left,
  right: left.map(point => [360 - point[0], point[1]])
}
const paddingX = 180
const paddingY = 80
export default class SpeachBubble extends Phaser.GameObjects.Container {
  constructor (scene, x, y, name, imageKey, text, position = -1) {
    x = Math.fix(x, paddingX, config.WIDTH - paddingX)
    y = Math.fix(y, paddingY, config.HEIGHT - paddingY)
    super(scene, x, y)
    this.bg = scene.add.polygon(0, 0, points[position === -1 ? 'left' : 'right'], config.COLORS.black).setAlpha(0.7)
    this.bg.isStroked = true
    this.bg.lineWidth = 1.5
    this.bg.strokeColor = config.COLORS.white
    const left = position === -1
    // const mask = scene.make.graphics().setPosition(this.x + 80 * position, this.y - 29).fillRect(-80, -55, 160, 120).setRotation(-0.05 * position).createGeometryMask()
    this.image = scene.add.sprite(left ? -120 : 102, -100, imageKey).setOrigin(0.5, 0)
    this.name = scene.add.text(left ? -70 : -140, left ? -69 : -72, name, { fill: config.COLORS.white.toColorString, fontSize: 16, fontFamily: config.FONTS.TEXT, fontStyle: 'bold', stroke: config.COLORS.dark.toColorString, strokeThickness: 2 }).setPadding(0, 2, 0, 0)
    this.text = scene.add.text(left ? 44 : -44, -6, '', { fill: config.COLORS.white.toColorString, fontSize: 14, fontFamily: config.FONTS.TEXT, lineSpacing: 5 }).setOrigin(0.5, 0.5).setPadding(0, 2, 0, 0)
    this.setText(text)
    this.add([this.bg, this.image, this.name, this.text])
    scene.add.existing(this)
  }
  setText(text) {
    this.text.text = lineBreak(text, 28)
  }
}
