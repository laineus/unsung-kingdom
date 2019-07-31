import config from '../data/config'
import MenuMap from './MenuMap'
import MenuStatus from './MenuStatus'
import MenuSave from './MenuSave'
import { listAnimation } from '../util/animations'
const contents = [
  { class: MenuMap, name: 'MAP & QUEST' },
  { class: MenuStatus, name: 'CHARACTER' },
  { class: MenuSave, name: 'SAVE' }
]
export default class Menu extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    scene.add.existing(this)
    this.bg = scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x886644, 0.2).setOrigin(0, 0)
    this.bg.blendMode = 1
    this.window = scene.add.polygon(0, 0, [[0, 0], [(50).byRight, 0], [(150).byRight, (0).byBottom], [0, (0).byBottom]], 0x000000, 0.7).setOrigin(0, 0)
    this.add([this.bg, this.window])
    this.buttons = contents.map((content, i) => this.button(content, (15).byRight, i * 125 + 15))
    this.add(this.buttons)
    listAnimation(scene, this.buttons, { x: 100 })
    this.close = scene.add.text((15).byRight, (15).byBottom, 'CLOSE', { align: 'center', fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(1, 1).setPadding(0, 2, 0, 0)
    this.close.setInteractive().on('pointerdown', this.destroy.bind(this))
    this.add(this.close)
    this.scene.gameScene.blur(true)
    scene.scene.pause('Game')
    this.loadContent(contents[0])
    listAnimation(scene, [this.window, this.content], { x: -100 })
  }
  destroy () {
    this.scene.gameScene.blur(false)
    this.scene.scene.resume('Game')
    super.destroy()
  }
  button (content, x, y) {
    const button = this.scene.add.container(x - 50, y + 50).setSize(100, 100)
    const bg = this.scene.add.sprite(0, 0, 'circle').setScale(0.110, 0.110)
    const tx = this.scene.add.text(0, 35, content.name, { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 17, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0.5, 1).setPadding(0, 2, 0, 0)
    button.add([bg, tx])
    button.setInteractive().on('pointerdown', this.loadContent.bind(this, content))
    return button
  }
  loadContent (content) {
    if (this.content instanceof content.class) return
    if (this.content) this.content.destroy()
    this.content = new content.class(this.scene)
    this.content.on('close', this.destroy.bind(this))
    this.add(this.content)
    this.buttons.forEach(b => this.moveTo(b, this.length - 1))
  }
}
