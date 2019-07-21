import config from '../data/config'
import MenuMap from './MenuMap'
import MenuStatus from './MenuStatus'
import MenuSave from './MenuSave'
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
    this.window = scene.add.polygon(0, 0, [[0, 0], [(150).byRight, 0], [(200).byRight, (0).byBottom], [0, (0).byBottom]], 0x000000, 0.7).setOrigin(0, 0)
    this.add([this.bg, this.window])
    this.buttons = contents.map((content, i) => this.button(content, (15).byRight, i * 115 + 15))
    this.add(this.buttons)
    this.close = scene.add.text((15).byRight, (15).byBottom, 'CLOSE', { align: 'center', fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(1, 1).setPadding(0, 2, 0, 0)
    this.close.setInteractive().on('pointerdown', this.destroy.bind(this))
    this.add(this.close)
    this.scene.gameScene.blur(true)
    scene.scene.pause('Game')
    this.loadContent(contents[0])
  }
  destroy () {
    this.scene.gameScene.blur(false)
    this.scene.scene.resume('Game')
    super.destroy()
  }
  button (content, x, y) {
    const button = this.scene.add.sprite(x, y, 'circle').setAlpha(0.7).setOrigin(1, 0).setScale(0.100, 0.100)
    button.setInteractive().on('pointerdown', this.loadContent.bind(this, content))
    return button
  }
  loadContent (content) {
    if (this.content instanceof content.class) return
    if (this.content) this.content.destroy()
    this.content = new content.class(this.scene)
    this.add(this.content)
  }
}
