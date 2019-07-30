import moment from 'moment'
import config from '../data/config'
import Box from './Box'
import Button from './Button'
export default class MenuSave extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const title = scene.add.text(20, 15, 'SAVE', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    const sub = scene.add.text(20, 41, 'セーブ', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONT })
    this.add([title, sub])
    this.setItems()
    this.setContent(this.scene.storage.lastNumber)
  }
  setItems () {
    if (this.items) this.items.forEach(v => v.destroy())
    const dataList = this.scene.storage.getList()
    this.items = dataList.map((data, i) => this.getItem(data, 150, i * 40 + 100))
    this.add(this.items)
  }
  getItem (data, x, y) {
    const item = this.scene.add.container(x, y).setSize(240, 30).setInteractive().on('pointerdown', () => {
      this.setContent(data.number)
    })
    const bg = new Box(this.scene, 0, 0, 240, 30)
    item.add(bg)
    const tx = this.scene.add.text(-105, 0, `Data ${data.number}`, { fontSize: 16, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5)
    item.add(tx)
    if (data.exists) {
      const timeString = moment(data.state.saved, 'X').format('YYYY-MM-DD HH:mm:ss')
      const time = this.scene.add.text(105, 0, timeString, { fontSize: 12, fontFamily: config.FONT }).setOrigin(1, 0.5)
      item.add(time)
    }
    return item
  }
  setContent (number) {
    if (this.content) this.content.destroy()
    const data = this.scene.storage.getRow(number || 1)
    this.content = this.getContent(data, 400, 400)
    this.add(this.content)
  }
  getContent (data, x, y) {
    const container = this.scene.add.container(x, y)
    const tx = this.scene.add.text(0, 0, `Data ${data.number}`, { fontSize: 17, fontStyle: 'bold', fontFamily: config.FONT })
    container.add(tx)
    const buttonWidth = 150
    const save = new Button(this.scene, buttonWidth.half, 60, 'Save', buttonWidth, 45).on('click', () => {
      this.scene.storage.save(data.number)
      this.setItems()
      this.setContent(data.number)
    })
    container.add(save)
    if (data.exists) {
      const detail = this.scene.add.text(200, 0, `map: ${data.state.map}`, { align: 'center', fontSize: 15, fontFamily: config.FONT })
      container.add(detail)
      const load = new Button(this.scene, buttonWidth.half + buttonWidth + 10, 60, 'Load', buttonWidth, 45).on('click', () => {
        this.scene.storage.load(data.number)
        this.scene.gameScene.mapChange(data.state.map, data.state.x, data.state.y).then(() => {
          this.emit('close')
        })
      })
      container.add(load)
    }
    return container
  }
}
