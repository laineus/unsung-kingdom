import config from '../data/config'
import EnemyBattler from './EnemyBattler'
import PlayerBattler from './PlayerBattler'
import Button from './Button'
import storage from '../data/storage'
import abilities from '../data/abilities'
import { slideIn, fadeIn } from '../util/animations'
const positions = {
  1: [0],
  2: [-130, 130],
  3: [-200, 0, 200],
  4: [-240, -80, 80, 240],
  5: [-260, -130, 0, 130, 260]
}
export default class Battle extends Phaser.GameObjects.Container {
  constructor (scene, group, { boss = false, defeatEvent = false, bgm = null } = {}, callback) {
    super(scene)
    this.group = group
    this.scene = scene
    this.boss = boss
    this.defeatEvent = defeatEvent
    this.callback = callback
    scene.add.existing(this)
    scene.scene.pause('Game')
    this.scene.gameScene.blur(true)
    this.overlay = this.scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, boss ? 0xFF0000 : 0x886644, 100).setOrigin(0, 0)
    this.overlay.blendMode = 1
    this.window = this.scene.add.sprite(0, 0, 'dark').setOrigin(0, 0)
    this.enemies = this.scene.add.container(0, 0)
    this.players = this.scene.add.container(0, 0)
    this.buttons = this.scene.add.container(0, 0)
    this.add([this.overlay, this.window, this.enemies, this.players, this.buttons])
    // set enemies
    this.group.map(enemy => {
      return new EnemyBattler(this.scene, enemy, boss).setPosition(config.WIDTH.half, config.HEIGHT.half - 50)
    }).forEach(e => this.enemies.add(e))
    // set players
    storage.state.battlers.map((player, i) => {
      if (boss) player.hp = player.max_hp
      const x = config.WIDTH.half + ((i - 1) * 310)
      return new PlayerBattler(this.scene, player).setPosition(x, (70).byBottom)
    }).forEach(e => this.players.add(e))
    Number(this.enemies.length).toArray().forEach(i => {
      const box = new Button(this.scene, 80, 0, 'Attack', 120, 40)
      box.line = this.scene.add.line(-56, 0, 0, 0, 0, 0, config.COLORS.white).setOrigin(0, 0).setLineWidth(0.5).setAlpha(0.5)
      box.circle = this.scene.add.circle(0, 1, 2, config.COLORS.white).setOrigin(0.5, 0.5)
      box.add([box.line, box.circle])
      box.on('click', () => {
        this.tapEnemy(this.enemies.list[i])
      })
      this.buttons.add(box)
    })
    // register
    this.all = []
    this.players.list.forEach(v => this.all.push(v))
    this.enemies.list.forEach(v => this.all.push(v))
    this.turnIndex = -1
    this.increaseTurn()
    this.fixButtonsPosition()
    this.slideInButtons()
    this.players.list.forEach((v, i) => {
      v.y += 150
      this.scene.add.tween({ targets: v, duration: 200, ease: 'Power2', delay: i * 50, y: v.y - 150 })
    })
    this.bgmResolver = this.scene.interruptBgm(bgm || 'battle')
  }
  preUpdate () {
    this.enemies.list.forEach((v, i) => {
      v.x = config.WIDTH.half + positions[this.enemies.length][i]
    })
  }
  updateButtons () {
    const updated = this.buttons.list.some((v, i) => {
      if (i < this.enemies.length) return false
      v.destroy()
      return true
    })
    if (updated) this.fixButtonsPosition()
    this.buttons.list.forEach(button => {
      if (!button.visible && this.playerTurn) this.slideInButtons()
      button.visible = this.playerTurn
    })
  }
  fixButtonsPosition () {
    if (this.victory) return
    this.buttons.list.forEach((button, i) => {
      const y = 320 + (i * -52)
      button.y = y
      button.line.geom.x2 = -340 + positions[this.enemies.length][i]
      button.circle.x = -396 + positions[this.enemies.length][i]
      button.toInactive()
    })
  }
  slideInButtons () {
    this.buttons.list.forEach((button, i) => {
      button.x = config.WIDTH.half + 60 + positions[this.enemies.length][i]
      this.scene.add.tween({ targets: button, duration: 250, ease: 'Power2', x: config.WIDTH - 80 })
      button.line.scaleX = 0
      this.scene.add.tween({ targets: button.line, duration: 250, ease: 'Power2', scaleX: 1 })
      button.circle.x = -56
      this.scene.add.tween({ targets: button.circle, duration: 250, ease: 'Power2', x: -396 + positions[this.enemies.length][i] })
    })
  }
  get currentBattler () {
    return this.all[this.turnIndex]
  }
  get playerTurn () {
    return this.currentBattler.constructor.name === 'PlayerBattler'
  }
  increaseTurn () {
    if (this.defeat) return this.end(false)
    if (this.victory) return this.end(true)
    this.turnIndex = this.turnIndex < (this.all.length - 1) ? this.turnIndex + 1 : 0
    const result = this.currentBattler.alive && this.currentBattler.increaseTurn()
    if (!result) return this.increaseTurn()
    this.setAbilityButtons()
    if (!this.playerTurn) this.execEnemyTurn()
    this.updateButtons()
  }
  async execEnemyTurn () {
    await this.scene.sleep(220)
    const setting = this.currentBattler.getAttackMode()
    const count = { normal: 1, double: 2, triple: 3 }
    if (setting.type in count) {
      await this.attackToOnePlayer(count[setting.type], setting.mag)
    } else {
      await this.currentBattler.attackAnim()
      await this.multiAttack(setting.mag)
    }
    await this.scene.sleep(400)
    this.increaseTurn()
  }
  async attackToOnePlayer (loop = 1, mag = 1) {
    const tgt = this.players.list.filter(v => v.alive).random()
    if (!tgt) return await this.scene.sleep(180)
    const counterResult = await this.counter(this.currentBattler, tgt)
    if (counterResult) return
    await this.currentBattler.attackAnim()
    await this.currentBattler.attackTo(tgt, { mag })
    if (loop <= 1) return
    return this.attackToOnePlayer(loop - 1, mag)
  }
  async cutIn () {
    const h = 110
    const counterBg = this.scene.add.rectangle(0, (h.half + 24).byBottom, config.WIDTH, h, config.COLORS.theme).setOrigin(0, 0.5).setScale(1, 0)
    const counterChara = this.scene.add.sprite(200, (180).byBottom, 'ann').setOrigin(0.5, 0)
    this.scene.add.tween({
      targets: counterBg, duration: 100, ease: 'Power2', scaleY: 1, onComplete: () => {
        this.scene.add.tween({
          targets: [counterBg, counterChara], duration: 100, ease: 'Power2', delay: 600, alpha: 0, onComplete: () => {
            counterBg.destroy()
          }
        })
      }
    })
    this.add([counterBg, counterChara])
    await this.scene.sleep(200)
  }
  async counter (base, tgt) {
    const noCounterPercent = Math.round(tgt.hp * 100 / tgt.maxHp)
    if (Math.chance(noCounterPercent)) return false
    const result = await this.counterChance(tgt)
    if (result) {
      storage.state.counter_delay -= storage.state.counter_delay > 500 ? 100 : 10
      await this.cutIn()
      await tgt.attackTo(this.currentBattler)
    } else {
      if (storage.state.counter_delay < 500) storage.state.counter_delay += 10
    }
    return result
  }
  async counterChance (tgt) {
    const button = this.scene.add.container(tgt.x, tgt.y - 90).setSize(140, 140)
    const box = this.scene.add.rectangle(0, 0, 140, 140).setFillStyle(config.COLORS.black, 0.6).setStrokeStyle(1, config.COLORS.white).setRotation(Math.PI / 4)
    const text = this.scene.add.text(0, 0, 'COUNTER!!', { align: 'center', fontSize: 27, fontFamily: config.FONTS.UI }).setOrigin(0.5, 0.5).setPadding(0, 2, 0, 0)
    button.add([box, text])
    this.add(button)
    return new Promise(resolve => {
      button.setInteractive().on('pointerdown', () => resolve(true))
      this.scene.sleep(storage.state.counter_delay + 1000000).then(() => resolve(false))
    }).then(result => {
      button.destroy()
      return result
    })
  }
  addOptionButton (name, x, y, onClick) {
    const button = new Button(this.scene, x, y, name, 120, 40).setInteractive().on('pointerdown', onClick.bind(this))
    this.add(button)
    this.ablButtons.push(button)
  }
  setAbilityButtons () {
    if (this.ablButtons) this.ablButtons.forEach(v => v.destroy())
    this.ablButtons = []
    if (!this.playerTurn) return
    const ability = this.currentBattler.weapon ? abilities[this.currentBattler.weapon.ability] : null
    if (!ability) return
    switch (ability) {
      case 'Heal': {
        this.players.list.forEach((player, i) => {
          if (!player.alive || player.hp === player.maxHp) return
          this.addOptionButton('Heal', 220 + i * 310, 390, () => {
            this.currentBattler.heal(player, 34)
            this.increaseTurn()
          })
        })
        break
      }
      case 'Heal-All': {
        const players = this.players.list.filter(p => p.alive && p.hp < p.maxHp)
        if (!players.length) return
        this.addOptionButton('Heal All', 80, 320, () => {
          players.forEach(p => this.currentBattler.heal(p, 20))
          this.increaseTurn()
        })
        break
      }
      case 'Multi-Attack': {
        this.addOptionButton('Multi Attack', 80, 220, () => {
          this.multiAttack().then(this.increaseTurn.bind(this))
        })
        break
      }
    }
    slideIn(this.scene, this.ablButtons)
  }
  tapEnemy (enemy) {
    if (!this.playerTurn) return
    this.buttons.list.forEach(v => (v.visible = false))
    this.currentBattler.attackTo(enemy).then(() => {
      this.buttons.list.forEach(v => (v.visible = true))
      this.increaseTurn()
    })
  }
  multiAttack (mag = 0.66) {
    const targets = this.playerTurn ? this.enemies.list : this.players.list.filter(v => v.alive)
    return Promise.all(targets.map(enemy => {
      return this.currentBattler.attackTo(enemy, { mag })
    }))
  }
  get defeat () {
    return this.players.list.filter(v => v.alive).length === 0
  }
  get victory () {
    return this.enemies.list.length === 0
  }
  destroyUI () {
    this.enemies.destroy()
    this.players.destroy()
    this.buttons.destroy()
    this.ablButtons.forEach(v => v.destroy())
  }
  end (result) {
    if (this.defeatEvent) {
      this.destroy(result)
      storage.state.battlers.forEach(v => v.hp = v.max_hp)
      return
    }
    if (result) {
      this.destroyUI()
      if (this.boss) {
        this.scene.battleResult(this.group, { boss: true }).then(() => {
          this.destroy(result)
        })
      } else {
        this.scene.battleResult(this.group)
        this.destroy(result)
      }
    } else {
      const blood = this.scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0xFF0000).setOrigin(0, 0)
      const gameover = this.lvLabel = this.scene.add.text(config.WIDTH.half, config.HEIGHT.half - 10, 'GAME OVER', { align: 'center', fill: config.COLORS.white.toColorString, fontSize: 28, fontFamily: config.FONTS.UI }).setOrigin(0.5, 0.5)
      this.add([blood, gameover])
      fadeIn(this.scene, blood, { alpha: 0.6, duration: 1800 })
      fadeIn(this.scene, gameover, { duration: 800 })
      storage.state.battlers.forEach(v => v.hp = v.max_hp)
      setTimeout(() => {
        this.scene.gameScene.mapChange('room1', (8).toPixel, (12).toPixelCenter, { r: 'down' }).then(() => {
          this.destroy(result)
        })
      }, 5000)
    }
  }
  destroy (result) {
    this.scene.scene.resume('Game')
    this.scene.gameScene.blur(false)
    this.bgmResolver()
    super.destroy()
    this.callback(result)
  }
}
