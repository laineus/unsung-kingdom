import config from '../data/config'
import chapters from '../data/chapters'
import missions from '../data/missions'
import Box from './Box'
export default class MenuMap extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const title = scene.add.text(20, 15, 'MAP & QUEST', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    const sub = scene.add.text(20, 41, 'マップ・クエスト', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONT })
    this.add([title, sub])
    this.setMap(448, 544)
    this.setChapter(0)
  }
  setChapter (i) {
    this.chapter = i
    if (this.chapterLabel) this.chapterLabel.destroy()
    this.chapterLabel = this.getChapter(this.chapter, 30, 100)
    this.add(this.chapterLabel)
    if (this.missionLabels) this.missionLabels.forEach(v => v.destroy())
    this.missionLabels = missions.filter(v => v.chapter === this.chapter).map((mission, i) => this.getMission(mission, 165, 160 + i * 40))
    this.add(this.missionLabels)
    this.setPager()
    this.setMissionDetail(null)
  }
  moveChapter (diff) {
    if (![-1, 1].includes(diff) || (diff === -1 && !this.hasPrevious) || (diff === 1 && !this.hasNext)) return
    this.setChapter(this.chapter + diff)
  }
  get hasPrevious () {
    return this.chapter > 0
  }
  get hasNext () {
    return this.chapter < this.scene.storage.state.chapter
  }
  setPager () {
    if (this.pagerPrevious) this.pagerPrevious.destroy()
    if (this.pagerNext) this.pagerNext.destroy()
    if (this.hasPrevious) {
      this.pagerPrevious = this.scene.add.container(80, 500).setSize(100, 30).setInteractive().on('pointerdown', () => this.moveChapter(-1))
      this.pagerPrevious.add(new Box(this.scene, 0, 0, 100, 30))
      this.pagerPrevious.add(this.scene.add.text(-40, 0, 'Previous', { fontSize: 13, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5))
      this.add(this.pagerPrevious)
    }
    if (this.hasNext) {
      this.pagerNext = this.scene.add.container(250, 500).setSize(100, 30).setInteractive().on('pointerdown', () => this.moveChapter(1))
      this.pagerNext.add(new Box(this.scene, 0, 0, 100, 30))
      this.pagerNext.add(this.scene.add.text(40, 0, 'Next', { fontSize: 13, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(1, 0.5))
      this.add(this.pagerNext)
    }
  }
  getChapter (i, x, y) {
    const chapter = chapters[i]
    const container = this.scene.add.container(x, y)
    const prefix = this.scene.add.text(0, 0, chapter.name, { fontSize: 18, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0)
    const title = this.scene.add.text(50, -3, chapter.title, { fontSize: 13, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0)
    const en = this.scene.add.text(50, 15, chapter.en, { fill: config.COLORS.gray.toColorString, fontSize: 9, fontFamily: config.FONT }).setOrigin(0, 0)
    container.add([prefix, title, en])
    return container
  }
  getMission (mission, x, y) {
    const container = this.scene.add.container(x, y).setSize(270, 32)
    const box = new Box(this.scene, 0, 0, 270, 32)
    container.setInteractive().on('pointerdown', () => this.setMissionDetail(mission))
    const title = this.scene.add.text(-120, 0, mission.title, { fontSize: 14, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5)
    container.add([box, title])
    return container
  }
  setMissionDetail (mission) {
    if (this.detail) this.detail.destroy()
    if (!mission) return
    this.detail = this.getMissionDetail(mission, 330, 400)
    this.add(this.detail)
  }
  getMissionDetail (mission, x, y) {
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(0, 0, mission.title, { fontSize: 15, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0)
    const dumy = 'クエストの詳細文がここにはいるぞ。クエストの詳細文がここにはいるぞ。\nクエストの詳細文がここにはいるぞ。'
    const desc = this.scene.add.text(0, 30, dumy, { fill: config.COLORS.gray.toColorString, fontSize: 12, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0)
    container.add([title, desc])
    return container
  }
  setMap (x, y) {
    if (this.map) this.map.destroy()
    const scale = 1
    const mask = this.getMask()
    this.map = this.scene.add.sprite(0, -0, 'forest_all').setOrigin(0, 0).setScale(scale, scale).setAlpha(0.5).setMask(mask)
    this.map.setPosition(config.WIDTH.half - x * scale, config.HEIGHT.half - y * scale)
    this.add(this.map)
    this.sendToBack(this.map)
  }
  getMask () {
    if (!this.mask) this.mask = this.scene.make.graphics().fillRect(0, -180, 895, 720).setRotation(0.18).createGeometryMask()
    return this.mask
  }
}
