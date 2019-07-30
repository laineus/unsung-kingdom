import config from '../data/config'
import Box from './Box'
export default class MenuSave extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const title = scene.add.text(20, 15, 'SAVE', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    const sub = scene.add.text(20, 41, 'セーブ', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONT })
    this.add([title, sub])
    const list = this.scene.storage.getList().map((data, i) => {
      return this.getItem(data, 150, i * 40 + 100)
    })
    this.add(list)
  }
  getItem (data, x, y) {
    const item = this.scene.add.container(x, y).setSize(240, 30).setInteractive().on('pointerdown', () => {
      this.setContent(data)
    })
    const bg = new Box(this.scene, 0, 0, 240, 30)
    item.add(bg)
    const tx = this.scene.add.text(-105, 0, `Data ${data.number}`, { fontSize: 16, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5)
    const time = this.scene.add.text(105, 0, 'YYYY-MM-DD HH:ii:ss', { fontSize: 12, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(1, 0.5)
    item.add([tx, time])
    const save = this.scene.add.text(100, 0, 'save', { align: 'center', fontSize: 16, fontStyle: 'bold', fontFamily: config.FONT })
    save.setInteractive().on('pointerdown', () => {
      this.scene.storage.save(data.number)
    })
    item.add(save)
    if (data.exists) {
      const load = this.scene.add.text(140, 0, 'load', { align: 'center', fontSize: 17, fontStyle: 'bold', fontFamily: config.FONT })
      const detail = this.scene.add.text(200, 0, `map: ${data.state.map} x: ${data.state.x} y: ${data.state.y}`, { align: 'center', fontSize: 15, fontFamily: config.FONT })
      load.setInteractive().on('pointerdown', () => {
        this.scene.storage.load(data.number)
        this.scene.gameScene.mapChange(data.state.map, data.state.x, data.state.y).then(() => {
          this.emit('close')
        })
      })
      item.add([load, detail])
    }
    return item
  }
  setContent (data) {
    if (this.content) this.content.destroy()
    this.content = this.getContent(data, 400, 400)
  }
  getContent (data, x, y) {
    const container = this.scene.add.container(x, y)
    const tx = this.scene.add.text(0, 0, `Data ${data.number}`, { fontSize: 17, fontStyle: 'bold', fontFamily: config.FONT })
    container.add(tx)
    return container
  }
}
