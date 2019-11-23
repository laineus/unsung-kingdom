import config from '../data/config'
import Box from './Box'
import Button from './Button'
import { slideIn, slideOut } from '../util/animations'
const AERA_LIST = [
  { name: '王都', x: 960, y: 560, key: 'town1', mapX: 2, mapY: 20 },
  { name: '王城 - 裏庭', x: 960, y: 360, key: 'castle1', mapX: 48, mapY: 37 },
  { name: 'ワルコフォレンスの森', x: 350, y: 220, key: 'forest1', mapX: 45, mapY: 17 },
  { name: 'トロイア公爵邸の地下通路', x: 1184, y: 736, key: 'forest1', mapX: 10, mapY: 10 },
  { name: '聖アンテルスの墓地', x: 960, y: 928, key: 'forest1', mapX: 10, mapY: 10 },
  { name: 'グリファルデ神殿', x: 1728, y: 485, key: 'forest1', mapX: 10, mapY: 10 }
]
const SCALE = {
  DEFAULT: 0.5,
  ZOOM: 0.75
}
export default class WorldMap extends Phaser.GameObjects.Container {
  constructor (scene, callback) {
    super(scene)
    this.scene = scene
    this.callback = callback
    this.scene.scene.pause('Game')
    this.scene.add.existing(this)
    this.scene.transition(false).then(() => {
      this.init()
    })
    this.scene.gameScene.player.stopWalk()
  }
  init () {
    this.map = this.scene.add.sprite(0, 0, 'map/world').setScale(SCALE.DEFAULT).setOrigin(0, 0).setInteractive().on('pointerdown', () => {
      this.setArea(null)
    })
    this.add(this.map)
    this.rows = AERA_LIST.filter((_, i) => {
      return this.scene.storage.state.allowed_map >= i
    }).map((area, i, arr) => {
      const height = 40
      const y = (50).byBottom - (arr.length - 1) * height
      const row = this.getMission(area, 145, y + i * height)
      this.add(row)
      return row
    })
    slideIn(this.scene, this.rows)
    this.button = new Button(this.scene, (105).byRight, (52).byBottom, 'Cancel', 140, 40)
    this.button.on('click', () => {
      slideOut(this.scene, this.rows, { x: -200 })
      slideOut(this.scene, this.button)
      this.selected ? this.onOk() : this.onCancel()
    })
    this.add(this.button)
  }
  onOk () {
    if (this.scene.storage.state.map === this.selected.key) return this.onCancel()
    this.scene.gameScene.mapChange(this.selected.key, this.selected.mapX.toPixelCenter, this.selected.mapY.toPixelCenter).then(() => {
      this.destroy()
    })
  }
  onCancel () {
    this.scene.transition(true).then(() => {
      this.destroy()
    })
  }
  setArea (area) {
    this.selected = area
    this.button.setText(area ? 'OK' : 'Cancel')
    const positionX = area ? config.WIDTH.half - area.x * SCALE.ZOOM : 0
    const positionY = area ? config.HEIGHT.half - area.y * SCALE.ZOOM : 0
    const scale = area ? SCALE.ZOOM : SCALE.DEFAULT
    this.scene.add.tween({ targets: this.map, duration: 400, ease: 'Power2', x: positionX, y: positionY, scale })
    this.rows.forEach(row => row.setActive(row.area === area))
  }
  getMission (area, x, y) {
    const container = this.scene.add.container(x, y).setSize(220, 32)
    container.area = area
    const box = new Box(this.scene, 0, 0, 220, 32)
    container.setInteractive().on('pointerdown', () => this.setArea(area))
    const title = this.scene.add.text(-90, 0, area.name, { fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setOrigin(0, 0.5)
    container.add([box, title])
    container.setActive = bool => title.setFill(bool ? config.COLORS.theme.toColorString : config.COLORS.white.toColorString)
    return container
  }
  destroy () {
    this.scene.scene.resume('Game')
    this.callback()
    super.destroy()
  }
}
