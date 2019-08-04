import config from '../data/config'
import MenuMap from './MenuMap'
import MenuStatus from './MenuStatus'
import MenuSave from './MenuSave'
import { slideIn, slideOut, fadeIn, fadeOut } from '../util/animations'
const contents = [
  { class: MenuMap, name: 'MAP & QUEST', min: 'マップ・クエスト' },
  { class: MenuStatus, name: 'CHARACTER', min: 'キャラクター' },
  { class: MenuSave, name: 'SAVE', min: 'セーブ' }
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
    this.close = this.getClose((70).byRight, (35).byBottom)
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
    if (!anime) return super.destroy()
    fadeOut(this.scene, this.bg)
    slideOut(this.scene, [...this.buttons, this.close], { x: 100 })
    slideOut(this.scene, [this.content, this.window], { x: -100 }).then(() => {
      super.destroy()
    })
  }
  button (content, x, y) {
    const button = this.scene.add.container(x - 50, y + 50).setSize(100, 100)
    const bg = this.scene.add.sprite(0, 0, 'circle').setScale(0.110, 0.110)
    const tx = this.scene.add.text(0, 31, content.name, { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 17, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0.5, 1).setPadding(0, 2, 0, 0)
    const min = this.scene.add.text(0, 27, content.min, { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 9, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0.5, 0).setPadding(0, 2, 0, 0)
    button.add([bg, tx, min])
    button.setInteractive().on('pointerdown', this.loadContent.bind(this, content))
    return button
  }
  loadContent (content) {
    if (this.content instanceof content.class) return
    if (this.content) this.content.destroy()
    this.content = new content.class(this.scene)
    this.content.on('close', this.destroy.bind(this, false))
    this.add(this.content)
    this.buttons.forEach(b => this.moveTo(b, this.length - 1))
  }
  getClose (x, y) {
    const close = this.scene.add.container(x, y).setSize(120, 50)
    close.add(this.scene.add.rectangle(0, 0, 120, 50, 0x000000).setAlpha(0))
    close.add(this.scene.add.text(15, -8, 'CLOSE', { align: 'center', fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    close.add(this.scene.add.text(15, 11, '閉じる', { align: 'center', fontSize: 10, fontStyle: 'bold', fontFamily: config.FONT }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    close.add(this.scene.add.rectangle(-35, 0, 30, 3, config.COLORS.theme).setRotation(Math.PI / 4))
    close.add(this.scene.add.rectangle(-35, 0, 30, 3, config.COLORS.theme).setRotation(Math.PI / -4))
    close.setInteractive().on('pointerdown', this.destroy.bind(this, true))
    return close
  }
}
