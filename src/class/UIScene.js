import moment from 'moment'
import config from '../data/config'
import storage from '../data/storage'
import setting from '../data/setting'
import missions from '../data/missions'
import { fadeIn, fadeOut, slideIn, slideOut } from '../util/animations'
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
import VirtualStick from './VirtualStick'
import AudioController from './AudioController'
import weapons from '../data/weapons'
const SPEED = {
  fast: 200,
  normal: 500,
  slow: 1000
}
const DEPTH = {
  ANNOUNCE: 300,
  MAP_INFO: 100,
  BATTLE_RESULT: 200
}
export default class UIScene extends Phaser.Scene {
  constructor () {
    super({ key: 'UI', active: false })
  }
  create (payload = {}) {
    this.storage = storage
    this.setting = setting
    this.audio = new AudioController(this)
    this.input.keyboard.on('keydown_S', this.snapShot.bind(this))
    this.menuButton = this.getMenuButton((70).byRight, (35).byBottom)
    this.add.existing(this.menuButton)
    this.loadEncounter()
    this.battlerSummary = new BattlerSummaryService(this)
    this.blocker = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT).setInteractive().setOrigin(0, 0).setVisible(false)
    this.add.existing(this.blocker)
    this.virtualStick = new VirtualStick(this, 100, (160).byBottom).setVisible(this.touchMode)
    this.checkButton = this.getCheckButton().setVisible(false)
    this.eventMode = false
    this.setChapterCreditFlag(false)
  }
  update (time, delta) {
    const sec = Math.floor(time / 1000)
    if (this.sec !== sec) {
      this.sec = sec
      this.storage.state.sec += 1
    }
    this.battlerSummary.update()
    this.virtualStick.setVisible(this.controllable && this.touchMode)
    this.checkButton.setVisible(this.controllable && this.touchMode && this.gameScene.nearestCheckable)
    if (this.gameScene.nearestCheckable) {
      this.checkButton.icon.setFrame(this.gameScene.nearestCheckable.balloon.key === 'bubble_talk' ? 0 : 1)
    }
    this.menuButton.setVisible(this.controllable)
  }
  get gameScene () {
    return this.scene.get('Game')
  }
  get controllable () {
    return !this.eventMode && this.scene.isActive('Game')
  }
  get touchMode () {
    switch (this.setting.state.controller) {
      case 0: return !this.sys.game.device.os.desktop
      case 1: return false
      case 2: return true
    }
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
    this.encounter1.setInteractive().on('pointerdown', () => {
      this.audio.se('click')
      this.gameScene.encounter(true)
    })
    // 2
    this.encounter2 = this.add.sprite((70).byRight, 70, 'encounter2').setOrigin(0.5, 0.5).setScale(0.9, 0.9)
    this.add.tween({ targets: this.encounter2, duration: 400, ease: 'Power2', loop: -1, scaleX: 1.1, scaleY: 1.1 })
    this.encounter2.setInteractive().on('pointerdown', () => {
      this.audio.se('click')
      this.gameScene.encounter(true)
    })
    this.setEncounter(false)
  }
  getCheckButton () {
    const btn = this.add.container((70).byRight, (160).byBottom).setSize(80, 80).setInteractive().on('pointerup', () => {
      this.gameScene.nearestCheckable.execTapEvent()
    })
    btn.add(this.add.circle(0, 0, 50, config.COLORS.black, 0.5))
    btn.icon = this.add.sprite(0, 0, 'virtual_button').setAlpha(0.25)
    btn.add(btn.icon)
    return btn
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
    this.audio.se('announce')
    const announcement = this.add.container(20, 50)
    announcement.setDepth(DEPTH.ANNOUNCE)
    const tx = this.add.text(15, -1, text, { align: 'left', fontSize: 13, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0, 0.5)
    const bg = new Box(this, 0, 0, tx.width + 35, 27).setOrigin(0, 0.5)
    announcement.add([bg, tx])
    await slideIn(this, announcement)
    await slideOut(this, announcement, { x: -200, delay: 2000 })
    return announcement
  }
  async systemMessage (message, delay = 1000) {
    const y = this.mapInfo && this.mapInfo.warning ? 52 : 22
    const text = this.add.text((20).byRight, y, message, { align: 'right', fontSize: 12, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(1, 0.5)
    await fadeIn(this, text)
    await fadeOut(this, text, { delay })
    return text
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
    return new Promise(resolve => new BattleResult(this, group, option, resolve).setDepth(DEPTH.BATTLE_RESULT))
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
  async informMapName (name) {
    if (!name) return
    const window = this.add.sprite(0, 0, 'dark').setOrigin(0, 0)
    const overlay = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x000000).setOrigin(0, 0).setInteractive()
    const mapName = name.split('').join('  ')
    const text = this.add.text(15, -8, mapName, { align: 'center', fontSize: 21, fontFamily: config.FONTS.UI }).setOrigin(0.5, 0.5).setPosition(config.WIDTH.half, config.HEIGHT.half)
    const list = [window, overlay, text]
    fadeIn(this, list, { alpha: 0.5 })
    this.gameScene.blur(true)
    await this.sleep(2000)
    this.gameScene.blur(false)
    this.add.tween({ targets: text, duration: 250, scale: 4 })
    await fadeOut(this, list)
  }
  setEventMode (bool) {
    this.eventMode = bool
    if (bool) {
      this.gameScene.player.stopWalk()
      this.blocker.setVisible(true)
      this.battlerSummary.setVisible(false)
      this.encounter1.setAlpha(0)
      this.encounter2.setAlpha(0)
      if (this.mapInfo) this.mapInfo.setVisible(false)
    } else {
      this.battlerSummary.setVisible(true)
      this.encounter1.setAlpha(1)
      this.encounter2.setAlpha(1)
      if (this.mapInfo) this.mapInfo.setVisible(true)
      this.time.delayedCall(1, () => {
        this.blocker.setVisible(false)
      })
    }
  }
  autoEvent (event) {
    this.setEventMode(true)
    event().then(() => this.setEventMode(false))
  }
  snapshopForSaveData () {
    return new Promise(resolve => {
      this.gameScene.player.targetMarker.anim.seek(0)
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
    button.add(this.add.text(15, -8, 'MENU', { align: 'center', fontSize: 20, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    button.add(this.add.text(15, 11, t('ui.sub.menu'), { align: 'center', fontSize: 9, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    button.add(this.add.rectangle(-35, -1, 25, 3, config.COLORS.theme).setRotation(Math.PI / 1))
    button.add(this.add.rectangle(-35, -1, 25, 3, config.COLORS.theme).setRotation(Math.PI / -2))
    button.setInteractive().on('pointerdown', (pointer) => {
      if (button.x !== x || this.inBattle) return
      pointer.isDown = false
      this.audio.se('click')
      slideOut(this, button, { destroy: false, x: 100 })
      slideOut(this, this.encounter1, { destroy: false, x: 100 })
      slideOut(this, this.encounter2, { destroy: false, x: 100 })
      if (this.mapInfo) this.mapInfo.setVisible(false)
      this.snapshopForSaveData().then(() => {
        this.menu().then(result => {
          button.x = x
          slideIn(this, button, { x: 100, delay: 100 })
          if (result === 'backToTitle') return this.gameScene.backToTitle()
          this.encounter1.x = (70).byRight
          this.encounter2.x = (70).byRight
          slideIn(this, this.encounter1, { x: 100, delay: 100 })
          slideIn(this, this.encounter2, { x: 100, delay: 100 })
          if (this.mapInfo) this.mapInfo.setVisible(true)
          this.battlerSummary.show()
        })
      })
    })
    return button
  }
  chapterStart (text) {
    return new Promise(resolve => {
      const container = this.add.container(config.WIDTH.half, config.HEIGHT.half)
      const emblem = this.add.sprite(0, 0, 'emblem').setTint(0x311612)
      const message = this.add.text(0, -5, text, { fill: config.COLORS.white.toColorString, fontSize: 16, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5)
      container.add([emblem, message])
      new StoryTelling(this, [container], false).on('beforeEnd', resolve)
    })
  }
  setChapterCreditFlag (bool) {
    this.chapterCreditFlag = bool
  }
  async chapterCredit () {
    if (!this.chapterCreditFlag) return
    this.setChapterCreditFlag(false)
    await this.sleep(500)
    const right = config.WIDTH - 120
    const tx1 = this.add.text(40, config.HEIGHT.half - 32, 'Written by', { align: 'left', fontSize: 11, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0, 1)
    const tx2 = this.add.text(40, config.HEIGHT.half - 30, 'Laineus', { align: 'left', fontSize: 15, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0, 0)
    await fadeIn(this, [tx1, tx2])
    await this.sleep(2500)
    await fadeOut(this, [tx1, tx2])
    await this.sleep(1000)
    const tx3 = this.add.text(right, config.HEIGHT.half - 32, 'Illustrations by', { align: 'left', fontSize: 11, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0, 1)
    const tx4 = this.add.text(right, config.HEIGHT.half - 30, '真符', { align: 'left', fontSize: 15, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0, 0)
    const tx5 = this.add.text(right, config.HEIGHT.half + 30, 'Music by', { align: 'left', fontSize: 11, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0, 1)
    const tx6 = this.add.text(right, config.HEIGHT.half + 32, 'Laineus', { align: 'left', fontSize: 15, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0, 0)
    await fadeIn(this, [tx3, tx4, tx5, tx6])
    await this.sleep(2500)
    await fadeOut(this, [tx3, tx4, tx5, tx6])
  }
  credit () {
    return new Promise(resolve => {
      const data = [
        { label: 'Written by', name: 'Laineus' },
        { label: 'Illustrations by', name: '真符' },
        { label: 'Music by', name: 'Laineus' }
      ]
      const list = data.map(v => {
        const c = this.add.container(config.WIDTH.half, config.HEIGHT.half)
        c.add(this.add.text(0, -20, v.label, { fill: config.COLORS.white.toColorString, fontSize: 13, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5))
        c.add(this.add.text(0, 5, v.name, { fill: config.COLORS.white.toColorString, fontSize: 17, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5))
        return c
      })
      new StoryTelling(this, list, false).on('beforeEnd', resolve)
    })
  }
  storyTelling () {
    const messages = (5).toArray().map(i => t(`storyTelling.${i}`))
    return new Promise(resolve => {
      const m1 = this.add.container(config.WIDTH.half, config.HEIGHT.half)
      m1.add(this.add.text(0, 0 - 35, messages[0], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15))
      m1.add(this.add.text(185, 0 + 55, messages[1], { align: 'right', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15))
      const m2 = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, messages[2], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15)
      const m3 = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, messages[3], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15)
      const m4 = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, messages[4], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15)
      this.audio.setBgm(null)
      this.sleep(1700).then(() => this.audio.setBgm('storytelling'))
      new StoryTelling(this, [m1, m2, m3, m4], true).on('beforeEnd', resolve)
    })
  }
  increaseWeapon (weaponId, announce = true) {
    const weapon = weapons.find(v => v.id === weaponId)
    if (!weapon) return false
    const id = Math.max(...storage.state.weapons.map(v => v.id), 0) + 1
    this.storage.state.weapons.push({ id, weapon_id: weapon.id })
    if (announce) this.announce(t('gotItem', weapon.name))
    return weapon
  }
  missionUpdate (key, completed) {
    this.storage.state.event[key][completed ? 'completed' : 'started'] = true
    const mission = missions.find(v => v.key === key)
    const text = completed ? t('missionComplete', mission.title) : t('missionStart', mission.title)
    const completedAll = missions.every(v => this.storage.state.event[v.key].completed)
    if (completedAll) window.archiveManager.activate('completed')
    return this.announce(text)
  }
  snapShot () {
    const filename = `ScreenShot_${moment().format('YYYYMMDD_HHmmss')}.png`
    this.game.renderer.snapshot(img => downloadBySource(img.src, filename))
  }
  async showMapInfo (e, reload = false) {
    if (this.mapInfo) this.mapInfo.destroy()
    if (!e) return
    const mapName = e.name || t('ui.undefinedArea')
    const boxWidth = Math.max(70 + mapName.width * 6, 180)
    const diff = e.enemyLevel ? e.enemyLevel - Math.average(...this.storage.state.battlers.map(b => b.lv)) : 0
    const warning = diff >= 2
    const alert = diff >= 4
    const color = (() => {
      if (alert) return 0xEE0000
      if (warning) return 0xEE9900
      return config.COLORS.theme
    })()
    const container = this.add.container(0, 0)
    container.warning = warning
    if (warning) {
      const bg = new Box(this, boxWidth - 17, 0, config.WIDTH + 50, 30, { color, alpha: 0.4 }).setOrigin(0, 0)
      this.add.tween({ targets: bg, duration: alert ? 300 : 600, yoyo: true, loop: -1, alpha: 0.6 })
      const bgText = this.add.text(boxWidth + 5, 6, 'WARNING', { align: 'left', fill: config.COLORS.white.toColorString, stroke: config.COLORS.white.toColorString, strokeThickness: 1, fontSize: 16, fontFamily: config.FONTS.UI }).setAlpha(0.5).setOrigin(0, 0)
      const dashedLine = this.add.tileSprite(boxWidth + 90, 12, config.WIDTH, 6, 'dashedline').setAlpha(0.5).setOrigin(0, 0)
      container.add([bg, bgText, dashedLine])
    }
    const box = new Box(this, -10, 0, boxWidth, 44).setOrigin(0, 0)
    const icon = (() => {
      if (alert) return this.add.sprite(22, 21, 'alert').setTint(color)
      const circle = this.add.circle(22, 21, 5)
      circle.isStroked = true
      circle.lineWidth = 1.5
      circle.strokeColor = color
      return circle
    })()
    const map = this.add.text(42, 6, mapName, { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 12, fontFamily: config.FONTS.TEXT }).setOrigin(0, 0)
    const lvInfo = e.enemyLevel ? `${t('ui.recommendedLevel')} ${e.enemyLevel}〜` : `${t('ui.recommendedLevel')} -`
    const lv = this.add.text(42, 21, lvInfo, { align: 'left', fill: color.toColorString, fontSize: 12, fontFamily: config.FONTS.TEXT }).setOrigin(0, 0)
    container.add([box, icon, map, lv])
    const movedX = -(boxWidth - 10)
    if (!reload) {
      slideIn(this, container, { delay: 250 })
      this.add.tween({
        targets: container,
        duration: 400,
        ease: 'Power2',
        delay: 3100,
        x: movedX
      })
    } else {
      container.x = movedX
    }
    this.add.existing(container)
    this.mapInfo = container
    this.mapInfo.reload = () => this.showMapInfo(e, true)
  }
}
