import moment from 'moment'
import config from '../data/config'
import Box from './Box'
import Button from './Button'
import chapters from '../data/chapters'
import { slideIn } from '../util/animations'
import missions from '../data/missions'
export default class MenuSave extends Phaser.GameObjects.Container {
  constructor (scene, loadMode = false) {
    super(scene)
    this.scene = scene
    this.loadMode = loadMode
    const title = scene.add.text(20, 15, loadMode ? 'LOAD' : 'SAVE', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 25, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const sub = scene.add.text(20, 41, loadMode ? 'ロード' : 'セーブ', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    this.add([title, sub])
    this.setItems()
    this.setContent(this.scene.storage.lastNumber || 0)
  }
  setItems () {
    const firstTime = !this.items
    if (!firstTime) this.items.forEach(v => v.destroy())
    const dataList = this.scene.storage.getList()
    this.items = dataList.map((data, i) => this.getItem(data, 165, i * 40 + 120))
    this.add(this.items)
    if (firstTime) slideIn(this.scene, this.items)
  }
  getItem (data, x, y) {
    const item = this.scene.add.container(x, y).setSize(240, 30).setInteractive().on('pointerdown', () => {
      this.scene.audio.se('click')
      this.setContent(data.number)
    })
    const bg = new Box(this.scene, 0, 0, 270, 32)
    item.add(bg)
    const tx = this.scene.add.text(-120, 0, data.name, { fontSize: 18, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(0, 0.5)
    item.add(tx)
    item.setActive = bool => tx.setFill(config.COLORS[bool ? 'theme' : 'white'].toColorString)
    if (data.exists) {
      const progress = this.getProgress(data.state).toFixed(1)
      const time = this.scene.add.text(120, 0, `Chapter-${data.state.chapter}    ${progress}%`, { fontSize: 16, fontFamily: config.FONTS.UI, fill: config.COLORS.gray.toColorString }).setOrigin(1, 0.5)
      item.add(time)
    }
    return item
  }
  setContent (number, reload = false) {
    if (!reload && this.content && this.content.number === number) return
    const x = 380
    if (this.items) {
      this.items.forEach((v, i) => v.setActive(i === number))
    }
    if (this.content) this.scene.add.tween({ targets: this.content, duration: 250, ease: 'Power2', x: x + 100, alpha: 0, onComplete: this.content.destroy.bind(this.content) })
    const data = this.scene.storage.getRow(number)
    this.content = this.getContent(data, x - 100, 104).setAlpha(0)
    this.add(this.content)
    this.scene.add.tween({ targets: this.content, duration: 250, ease: 'Power2', x, alpha: 1 })
  }
  getContent (data, x, y) {
    const container = this.scene.add.container(x, y)
    container.number = data.number
    const tx = this.scene.add.text(0, 225, data.name, { fontSize: 22, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    container.add(tx)
    const buttonWidth = 150
    if (data.number > 0 && !this.loadMode) {
      const save = new Button(this.scene, 280, 320, 'Save', buttonWidth, 40).on('click', () => {
        this.scene.storage.save(data.number)
        this.setItems()
        this.setContent(data.number, true)
      })
      container.add(save)
    }
    const thumb = this.scene.add.rectangle(0, 0, 360, 203, config.COLORS.black).setAlpha(0.7).setOrigin(0, 0)
    container.add(thumb)
    if (data.exists) {
      if (data.snapshot) {
        if (this.scene.textures.exists(data.name)) this.scene.textures.removeKey(data.name)
        this.scene.textures.addBase64(data.name, data.snapshot).once('onload', () => {
          container.add(this.scene.add.sprite(0, 0, data.name).setOrigin(0, 0).setScale(0.375, 0.375))
        })
      }
      const chapter = chapters[data.state.chapter]
      const detail = this.scene.add.text(100, 220, `${chapter.name} ${chapter.title}`, { fontSize: 16, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
      const timeString = moment(data.state.saved, 'X').format('YYYY/MM/DD  HH:mm')
      const progress = this.getProgress(data.state).toFixed(1)
      const date = this.scene.add.text(100, 243, `${timeString}     Progress  ${progress}%`, { fontSize: 16, fontFamily: config.FONTS.UI, fill: config.COLORS.gray.toColorString })
      container.add([detail, date])
      if (this.loadMode) {
        const load = new Button(this.scene, 280, 320, 'Load', buttonWidth, 40).on('click', () => {
          this.emit('loadData', data)
        })
        container.add(load)
      }
    }
    return container
  }
  get maxProgress () {
    return missions.length * 4
  }
  getProgress (state) {
    return Math.round(missions.reduce((sum, v) => {
      if (state.event[v.key].started) sum += 1
      if (state.event[v.key].completed) sum += 3
      return sum
    }, 0) * 1000 / this.maxProgress) / 10
  }
}
