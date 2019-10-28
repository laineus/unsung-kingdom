import config from '../data/config'
import Box from './Box'
import Button from './Button'
const AERA_LIST = [
  { name: '王都', x: 960, y: 560, chapter: 0, key: 'forest1', mapX: 10, mapY: 10 },
  { name: '王城 - 中庭', x: 960, y: 360, chapter: 0, key: 'forest1', mapX: 10, mapY: 10 },
  { name: 'ワルコフォレンスの森', x: 350, y: 220, chapter: 1, key: 'forest1', mapX: 10, mapY: 10 },
  { name: 'トロイア公爵邸の地下通路', x: 1184, y: 736, chapter: 2, key: 'forest1', mapX: 10, mapY: 10 },
  { name: '聖アンテルスの墓地', x: 960, y: 928, chapter: 3, key: 'forest1', mapX: 10, mapY: 10 },
  { name: 'グリファルデ神殿', x: 1728, y: 485, chapter: 4, key: 'forest1', mapX: 10, mapY: 10 }
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
    this.scene.add.existing(this)
    this.map = scene.add.sprite(0, 0, 'world').setScale(SCALE.DEFAULT).setOrigin(0, 0).setInteractive().on('pointerdown', () => {
      this.setArea(null)
    })
    this.add(this.map)
    this.rows = AERA_LIST.filter(area => {
      return this.scene.storage.state.chapter >= area.chapter
    }).map((area, i, arr) => {
      const height = 40
      const y = (50).byBottom - (arr.length - 1) * height
      const row = this.getMission(area, 145, y + i * height)
      this.add(row)
      return row
    })
    this.button = new Button(this.scene, (105).byRight, (52).byBottom, 'OK', 140, 40).setVisible(false)
    this.button.on('click', () => {
      this.scene.gameScene.mapChange(this.selected.key, this.selected.mapX.toPixelCenter, this.selected.mapY.toPixelCenter).then(() => {
        this.destroy()
      })
    })
    this.add(this.button)
  }
  setArea (area) {
    this.selected = area
    const positionX = area ? config.WIDTH.half - area.x * SCALE.ZOOM : 0
    const positionY = area ? config.HEIGHT.half - area.y * SCALE.ZOOM : 0
    const scale = area ? SCALE.ZOOM : SCALE.DEFAULT
    this.scene.add.tween({ targets: this.map, duration: 400, ease: 'Power2', x: positionX, y: positionY, scale })
    this.button.setVisible(area !== null)
    this.rows.forEach(row => row.setActive(row.area === area))
  }
  getMission (area, x, y) {
    const container = this.scene.add.container(x, y).setSize(220, 32)
    container.area = area
    const box = new Box(this.scene, 0, 0, 220, 32)
    container.setInteractive().on('pointerdown', () => this.setArea(area))
    const title = this.scene.add.text(-90, 0, area.name, { fontSize: 14, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5)
    container.add([box, title])
    container.setActive = bool => title.setFill(bool ? config.COLORS.theme.toColorString : config.COLORS.white.toColorString)
    return container
  }
  destroy () {
    this.callback()
    super.destroy()
  }
}
