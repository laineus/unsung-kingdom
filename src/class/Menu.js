import config from '../data/config'
import MenuMap from './MenuMap'
import MenuStatus from './MenuStatus'
import MenuSave from './MenuSave'
import MenuSetting from './MenuSetting'
import { slideIn, slideOut, fadeIn, fadeOut } from '../util/animations'
import UICloseButton from './UICloseButton'
const contents = [
  { class: MenuMap, name: 'MAP & QUESTS', min: 'マップ・クエスト', size: 52, frame: 0 },
  { class: MenuStatus, name: 'CHARACTERS', min: 'キャラクター', size: 52, frame: 1 },
  { class: MenuSave, name: 'SAVE', min: 'セーブ', size: 52, frame: 2 },
  { class: MenuSetting, name: 'SETTINGS', min: '設定', size: 42, frame: 3 }
]
export default class Menu extends Phaser.GameObjects.Container {
  constructor (scene, callback) {
    super(scene)
    this.scene = scene
    this.callback = callback
    scene.add.existing(this)
    this.bg = scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x886644, 0.2).setOrigin(0, 0)
    this.bg.blendMode = 1
    this.window = scene.add.polygon(0, 0, [[0, 0], [(50).byRight, 0], [(150).byRight, (0).byBottom], [0, (0).byBottom]], config.COLORS.black, 0.7).setOrigin(0, 0)
    this.add([this.bg, this.window])
    this.buttons = contents.map((content, i) => {
      const y = contents.slice(0, i).reduce((sum, v) => sum + (v.size * 2) + 10, 15) + content.size
      const x = Math.max(...contents.map(v => v.size)) + 15
      return this.button(content, x.byRight, y)
    })
    this.add(this.buttons)
    this.close = new UICloseButton(scene, (70).byRight, (35).byBottom).on('click', this.destroy.bind(this, true))
    this.add(this.close)
    this.scene.gameScene.blur(true)
    scene.scene.pause('Game')
    this.loadContent(contents[0])
    fadeIn(scene, this.bg)
    slideIn(scene, [...this.buttons, this.close], { x: 100 })
    slideIn(scene, [this.window, this.content], { x: -100 })
  }
  destroy (anime = false) {
    this.scene.gameScene.blur(false)
    this.scene.scene.resume('Game')
    this.callback()
    if (!anime) return super.destroy()
    fadeOut(this.scene, this.bg)
    slideOut(this.scene, [...this.buttons, this.close], { x: 100 })
    slideOut(this.scene, [this.content, this.window], { x: -100 }).then(() => {
      super.destroy()
    })
  }
  button (content, x, y) {
    const button = this.scene.add.container(x, y).setSize(104, 104)
    const bg = this.scene.add.circle(0, 0, content.size, config.COLORS.black)
    const icon = this.scene.add.sprite(0, -8, 'menu_icons').setOrigin(0.5, 0.5).setTint(config.COLORS.ghost).setFrame(content.frame)
    const tx = this.scene.add.text(0, content.size - 24, content.name, { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 20, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(0.5, 1).setPadding(0, 2, 0, 0)
    const min = this.scene.add.text(0, content.size - 28, content.min, { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0).setPadding(0, 2, 0, 0)
    button.add([bg, icon, tx, min])
    button.setInteractive().on('pointerdown', this.loadContent.bind(this, content))
    return button
  }
  loadContent (content) {
    if (this.content instanceof content.class) return
    if (this.content) this.content.destroy()
    this.content = new content.class(this.scene)
    this.content.on('close', this.destroy.bind(this, false))
    this.content.on('loadData', data => {
      this.scene.storage.load(data.number)
      this.scene.gameScene.mapChange(data.state.map, data.state.x, data.state.y, { save: false }).then(() => {
        this.destroy(false)
      })
    })
    this.add(this.content)
    this.buttons.forEach(b => this.moveTo(b, this.length - 1))
  }
}
