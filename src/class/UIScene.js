import moment from 'moment'
import config from '../data/config'
import storage from '../data/storage'
import missions from '../data/missions'
import { slideIn, slideOut } from '../util/animations'
import downloadBySource from '../util/downloadBySource'
import Talk from './Talk'
import Select from './Select'
import Battle from './Battle'
import BattleResult from './BattleResult'
import Menu from './Menu'
import WorldMap from './WorldMap'
import Box from './Box'
import BattlerSummaryService from './BattlerSummaryService'
import StoryTelling from './StoryTelling'
import weapons from '../data/weapons'
const MESSAGES = [
  `王は死んだ。\n冷たく閉ざされた門扉の先に、かつての繁栄はもはや見る影もない。\n王国は偉大なる王の死とともに終わりを迎えたのだ。`,
  '― 『ベリオン王国史』',
  '千年ののち、王国はその名も失い世界から忘れ去られた。\nしかしベリオンの民の末裔は〈平和王エドガー〉の眠るその地を決して離れようとはしなかった。',
  'そしてある時、王と王国の死を嘆く研究者たちの手によって、時間を移動する術が発見された。',
  'それはこの世の理に背くことであったが、彼らは歴史を変えることを厭わなかった。'
]
const SPEED = {
  fast: 200,
  normal: 500,
  slow: 1000
}
export default class UIScene extends Phaser.Scene {
  constructor () {
    super({ key: 'UI', active: false })
  }
  create (payload = {}) {
    this.storage = storage
    this.input.keyboard.on('keydown_S', this.snapShot.bind(this))
    this.menuButton = this.getMenuButton((70).byRight, (35).byBottom)
    this.add.existing(this.menuButton)
    this.loadEncounter()
    this.battlerSummary = new BattlerSummaryService(this)
    this.blocker = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT).setInteractive().setOrigin(0, 0).setVisible(false)
    this.add.existing(this.blocker)
    this.eventMode = false
    // TOOD: map name
    // this.window = this.add.sprite(0, 0, 'dark').setOrigin(0, 0)
    // this.overlay = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x000000).setOrigin(0, 0).setAlpha(0.2)
    // this.add.text(15, -8, 'ワルコフォレンスの森', { align: 'center', fontSize: 16, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setPosition(config.WIDTH.half, config.HEIGHT.half)
    // setTimeout(() => {
    //   this.gameScene.blur(true)
    // }, 100)
  }
  update (time, delta) {
    this.battlerSummary.update()
  }
  showController (bool) {
    this.menuButton.visible = bool
  }
  get gameScene () {
    return this.scene.get('Game')
  }
  get inBattle () {
    return this.children.list.some(v => v instanceof Battle)
  }
  loadEncounter () {
    // 1
    this.encounter1 = this.add.container((70).byRight, 70).setSize(84, 85)
    this.encounter1.add(this.add.sprite(0, 0, 'encounter1').setOrigin(0.5, 0.5).setScale(0.9, 0.9))
    this.encounter1.add(this.add.sprite(0, 60, 'click').setOrigin(0.5, 0.5).setScale(1, 1))
    this.add.tween({ targets: this.encounter1.list[0], duration: 400, ease: 'Power2', loop: -1, scaleX: 1.1, scaleY: 1.1 })
    this.add.tween({ targets: this.encounter1.list[1], duration: 400, loop: -1, yoyo: true, y: 65 })
    this.encounter1.setInteractive().on('pointerdown', () => this.gameScene.encounter(true))
    // 2
    this.encounter2 = this.add.sprite((70).byRight, 70, 'encounter2').setOrigin(0.5, 0.5).setScale(0.9, 0.9)
    this.add.tween({ targets: this.encounter2, duration: 400, ease: 'Power2', loop: -1, scaleX: 1.1, scaleY: 1.1 })
    this.setEncounter(false)
  }
  setEncounter (bool, stronger) {
    if (bool) {
      this[stronger ? 'encounter1' : 'encounter2'].visible = bool
    } else {
      this.encounter1.visible = false
      this.encounter2.visible = false
    }
  }
  async announce (text) {
    const announcement = this.add.container(20, 50)
    const tx = this.add.text(15, -1, text, { align: 'left', fontSize: 13, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0, 0.5)
    const bg = new Box(this, 0, 0, tx.width + 35, 27).setOrigin(0, 0.5)
    announcement.add([bg, tx])
    await slideIn(this, announcement)
    await slideOut(this, announcement, { x: -200, delay: 2000 })
    return announcement
  }
  menu () {
    return new Promise(resolve => new Menu(this, resolve))
  }
  worldMap () {
    return new Promise(resolve => new WorldMap(this, resolve))
  }
  talk (talks, option) {
    return new Promise(resolve => new Talk(this, talks, option, resolve))
  }
  select (options) {
    return new Promise(resolve => new Select(this, options, resolve))
  }
  battle (group, option) {
    this.gameScene.setEncountDelay()
    return new Promise(resolve => new Battle(this, group, option, resolve))
  }
  battleResult (group, option) {
    return new Promise(resolve => new BattleResult(this, group, option, resolve))
  }
  sleep (time) {
    return new Promise(resolve => setTimeout(() => resolve(), time))
  }
  transition (speed) {
    const duration = SPEED[speed]
    return new Promise(resolve => {
      const rect = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x111111).setOrigin(0, 0).setAlpha(0)
      this.add.tween({
        targets: rect,
        duration,
        hold: duration.half,
        alpha: 1,
        yoyo: true,
        onYoyo: resolve,
        onComplete: () => rect.destroy()
      })
    })
  }
  setEventMode (bool) {
    this.eventMode = bool
    if (bool) {
      this.gameScene.player.stopWalk()
      this.blocker.setVisible(true)
      this.menuButton.setVisible(false)
      this.battlerSummary.setVisible(false)
    } else {
      this.menuButton.setVisible(true)
      this.battlerSummary.setVisible(true)
      this.time.delayedCall(1, () => {
        this.blocker.setVisible(false)
      })
    }
  }
  autoEvent(event) {
    this.setEventMode(true)
    event().then(() => this.setEventMode(false))
  }
  snapshopForSaveData () {
    return new Promise(resolve => {
      this.scene.sleep('UI')
      this.game.renderer.snapshot(img => {
        this.storage.lastSnapshot = img.src
        this.scene.wake('UI')
        resolve()
      }, 'image/jpeg', 0.25)
    })
  }
  getMenuButton (x, y) {
    const button = this.add.container(x, y).setSize(120, 50)
    button.add(this.add.rectangle(0, 0, 120, 50, config.COLORS.black).setAlpha(0))
    button.add(this.add.text(15, -8, 'MENU', { align: 'center', fontSize: 25, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    button.add(this.add.text(15, 11, 'メニュー', { align: 'center', fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    button.add(this.add.rectangle(-35, -1, 25, 3, config.COLORS.theme).setRotation(Math.PI / 1))
    button.add(this.add.rectangle(-35, -1, 25, 3, config.COLORS.theme).setRotation(Math.PI / -2))
    button.setInteractive().on('pointerdown', () => {
      if (button.x !== x || this.inBattle) return
      slideOut(this, this.encounter1, { destroy: false, x: 100 })
      slideOut(this, this.encounter2, { destroy: false, x: 100 })
      slideOut(this, button, { destroy: false, x: 100 })
      this.snapshopForSaveData().then(() => {
        this.menu().then(() => {
          button.x = x
          this.encounter1.x = (70).byRight
          this.encounter2.x = (70).byRight
          slideIn(this, this.encounter1, { x: 100, delay: 100 })
          slideIn(this, this.encounter2, { x: 100, delay: 100 })
          slideIn(this, button, { x: 100, delay: 100 })
          this.battlerSummary.show()
        })
      })
    })
    return button
  }
  chapterStart (text) {
    return new Promise(resolve => {
      const m = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, text, { fill: config.COLORS.white.toColorString, fontSize: 16, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5)
      new StoryTelling(this, [m], false).on('beforeEnd', () => {
        resolve()
      })
    })
  }
  storyTelling () {
    return new Promise(resolve => {
      const m1 = this.add.container(config.WIDTH.half, config.HEIGHT.half)
      m1.add(this.add.text(0, 0 - 35, MESSAGES[0], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15))
      m1.add(this.add.text(185, 0 + 55, MESSAGES[1], { align: 'right', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15))
      const m2 = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, MESSAGES[2], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15)
      const m3 = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, MESSAGES[3], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15)
      const m4 = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, MESSAGES[4], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15)
      new StoryTelling(this, [m1, m2, m3, m4], true).on('beforeEnd', () => {
        resolve()
      })
    })
  }
  increaseWeapon (weaponId, announce = true) {
    const weapon = weapons.find(v => v.id === weaponId)
    if (!weapon) return false
    const id = Math.max(...storage.state.weapons.map(v => v.id), 0) + 1
    this.storage.state.weapons.push({ id, weapon_id: weapon.id })
    if (announce) this.announce(`${weapon.name}を手に入れた`)
    return weapon
  }
  missionUpdate (key, completed) {
    this.storage.state.event[key][completed ? 'completed' : 'started'] = true
    const mission = missions.find(v => v.key === key)
    const text = `『${mission.title}』を${completed ? '完了' : '開始'}`
    return this.announce(text)
  }
  snapShot () {
    const filename = `ScreenShot_${moment().format('YYYYMMDD_HHmmss')}.png`
    this.game.renderer.snapshot(img => downloadBySource(img.src, filename))
  }
}
