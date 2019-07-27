import config from '../data/config'
import chapters from '../data/chapters'
export default class MenuMap extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const tx = scene.add.text(15, 15, 'MAP', { align: 'center', fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    this.add(tx)
    const chapter = this.getChapter(0, 30, 100)
    this.add(chapter)
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
}
