import config from '../data/config'
import Box from './Box'
const AERA_LIST = [
  { name: '王都', x: 960, y: 560, chapter: 0 },
  { name: '王城 - 中庭', x: 960, y: 360, chapter: 0 },
  { name: 'ワルコフォレンスの森', x: 350, y: 220, chapter: 1 },
  { name: 'トロイア公爵邸の地下通路', x: 1184, y: 736, chapter: 2 },
  { name: '聖アンテルスの墓地', x: 960, y: 928, chapter: 3 },
  { name: 'グリファルデ神殿', x: 1728, y: 485, chapter: 4 }
]
const SCALE = {
  DEFAULT: 0.5,
  ZOOM: 0.75
}
export default class WorldMap extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    this.scene.add.existing(this)
    this.map = scene.add.sprite(0, 0, 'world').setScale(SCALE.DEFAULT).setOrigin(0, 0).setInteractive().on('pointerdown', v => {
      this.scene.add.tween({ targets: this.map, duration: 400, ease: 'Power2', x: 0, y: 0, scale: SCALE.DEFAULT })
      this.rows.forEach(row => row.setActive(false))
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
  }
  setArea (area) {
    const positionX = config.WIDTH.half - area.x * SCALE.ZOOM
    const positionY = config.HEIGHT.half - area.y * SCALE.ZOOM
    this.scene.add.tween({ targets: this.map, duration: 400, ease: 'Power2', x: positionX, y: positionY, scale: SCALE.ZOOM })
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
}
