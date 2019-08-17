import { lineBreak } from '../util/stringFunctions'
import config from '../data/config'
const left = [[32, 10], [335, 0], [360, 65], [335, 105], [190, 102], [189, 110], [196, 122], [178, 110], [176, 101], [18, 94], [0, 40]]
const points = {
  left,
  right: left.map(point => [270 - point[0], point[1]])
}
export default class SpeachBubble extends Phaser.GameObjects.Container {
  constructor (scene, x, y, name, text, position = 'left') {
    super(scene, x, y)
    this.bg = scene.add.polygon(0, 0, points[position], config.COLORS.black).setAlpha(0.7)
    this.bg.isStroked = true
    this.bg.lineWidth = 1
    this.bg.strokeColor = config.COLORS.white
    const mask = scene.make.graphics().setPosition(this.x - 80, this.y - 29).fillRect(-80, -55, 160, 120).setRotation(0.05).createGeometryMask()
    this.image = scene.add.sprite(-120, -81, 'ann').setOrigin(0.5, 0).setScale(0.66, 0.66).setMask(mask)
    this.name = scene.add.text(-70, -65, name, { fill: config.COLORS.white.toColorString, fontSize: 17,  fontStyle: 'bold', stroke: config.COLORS.dark.toColorString, strokeThickness: 4 }).setPadding(0, 2, 0, 0)
    this.text = scene.add.text(44, -6, '', { fill: config.COLORS.white.toColorString, fontSize: 14, lineSpacing: 5 }).setOrigin(0.5, 0.5).setPadding(0, 2, 0, 0)
    this.setText(text)
    this.add([this.bg, this.image, this.name, this.text])
    scene.add.existing(this)
  }
  setText(text) {
    this.text.text = lineBreak(text, 24)
  }
}
