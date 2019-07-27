import config from '../data/config'
import chapters from '../data/chapters'
import missions from '../data/missions'
import Box from './Box'
export default class MenuMap extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const tx = scene.add.text(15, 15, 'MAP & QUEST', { align: 'center', fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    this.add(tx)
    this.setChapter(0)
  }
  setChapter (i) {
    this.chapter = i
    if (this.chapterLabel) this.chapterLabel.destroy()
    this.chapterLabel = this.getChapter(this.chapter, 30, 100)
    this.add(this.chapterLabel)
    if (this.missionLabels) this.missionLabels.forEach(v => v.destroy())
    this.missionLabels = missions.filter(v => v.chapter === this.chapter).map((mission, i) => this.getMission(mission, 30, 150 + i * 30))
    this.add(this.missionLabels)
    this.setPager()
  }
  moveChapter (diff) {
    if (![-1, 1].includes(diff) || (diff === -1 && !this.hasPrevious) || (diff === 1 && !this.hasNext)) return
    this.setChapter(this.chapter + diff)
    this.setPager()
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
      this.pagerPrevious = this.scene.add.container(70, 500).setSize(100, 30).setInteractive().on('pointerdown', () => this.moveChapter(-1))
      this.pagerPrevious.add(new Box(this.scene, 0, 0, 100, 30))
      this.pagerPrevious.add(this.scene.add.text(-40, 0, 'Previous', { fontSize: 13, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5))
      this.add(this.pagerPrevious)
    }
    if (this.hasNext) {
      this.pagerNext = this.scene.add.container(230, 500).setSize(100, 30).setInteractive().on('pointerdown', () => this.moveChapter(1))
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
    const en = this.scene.add.text(50, 15, chapter.en, { fontSize: 9, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0)
    container.add([prefix, title, en])
    return container
  }
  getMission (mission, x, y) {
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(50, -3, mission.title, { fontSize: 13, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0)
    container.add([title])
    return container
  }
}
