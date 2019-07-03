import { lineBreak } from '../util/stringFunctions'
const points = [[32, 10], [295, 0], [320, 55], [295, 95], [170, 92], [169, 100], [176, 112], [158, 100], [156, 91], [15, 85], [0, 30]]
const points2 = points.map(point => [270 - point[0], point[1]])
export default class SpeachBabble extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene, 240, 280)
    this.bg = scene.add.polygon(0, 0, points, 0x000000).setAlpha(0.7)
    this.bg.isStroked = true
    this.bg.lineWidth = 1
    this.bg.strokeColor = 0xFFFFFF
    const mask = scene.make.graphics().fillRect(this.x - 160, this.y - 100, 160, 123).setRotation(0.05).createGeometryMask()
    this.image = scene.add.sprite(-82, -91, 'ann').setOrigin(0.5, 0).setScale(0.66, 0.66).setMask(mask)
    this.name = scene.add.text(-44, -65, 'Jaquelyn', { fill: '#FFF', fontSize: 17,  fontStyle: 'bold', stroke: '#222', strokeThickness: 4 }).setPadding(0, 2, 0, 0)
    const text = lineBreak('この記事は最終更新日から1年以上が経過しています。でもそんなの関係ねぇ！', 24)
    this.text = scene.add.text(54, -6, text, { fill: '#FFF', fontSize: 14, lineSpacing: 5 }).setOrigin(0.5, 0.5).setPadding(0, 2, 0, 0)
    this.add([this.bg, this.image, this.name, this.text])
    scene.add.existing(this)
  }
}
