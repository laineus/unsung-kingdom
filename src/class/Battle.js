import config from '../data/config'
import EnemyBattler from './EnemyBattler'
import PlayerBattler from './PlayerBattler'
import Button from './Button'
import storage from '../data/storage'
import expTable from '../data/expTable'
const positions = {
  1: [0],
  2: [-130, 130],
  3: [-200, 0, 200],
  4: [-240, -80, 80, 240],
  5: [-260, -130, 0, 130, 260],
}
export default class Battle extends Phaser.GameObjects.Container {
  constructor (scene, group, { boss = false } = {}, callback) {
    super(scene)
    this.group = group
    this.scene = scene
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
      const x = config.WIDTH.half + ((i - 1) * 310)
      return new PlayerBattler(this.scene, player).setPosition(x, (70).byBottom)
    }).forEach(e => this.players.add(e))
    Number(this.enemies.length).toArray.forEach(i => {
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
    // Attack All
    const attackAllButton = new Button(this.scene, 80, 220, 'Attack All', 120, 40)
    attackAllButton.setInteractive().on('pointerdown', () => {
      this.tapEnemyAll()
    })
    this.add(attackAllButton)
  }
  preUpdate () {
    if (this.victory) this.end()
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
    this.buttons.list.forEach((button, i) => {
      const y = 340 + (i * -52)
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
    this.turnIndex = this.turnIndex < (this.all.length - 1) ? this.turnIndex + 1 : 0
    const result = this.currentBattler.alive && this.currentBattler.increaseTurn()
    if (!result) return this.increaseTurn()
    if (!this.playerTurn) this.execEnemyTurn()
    this.updateButtons()
  }
  execEnemyTurn () {
    setTimeout(() => {
      this.currentBattler.attackAnim().then(() => {
        this.currentBattler.attackTo(this.players.list.filter(v => v.alive).random())
        setTimeout(() => this.increaseTurn(), 400)
      })
    }, 400)
  }
  tapEnemy (enemy) {
    if (!this.playerTurn) return
    this.buttons.list.forEach(v => (v.visible = false))
    this.currentBattler.attackTo(enemy).then(() => {
      this.buttons.list.forEach(v => (v.visible = true))
      this.increaseTurn()
    })
  }
  tapEnemyAll () {
    if (!this.playerTurn) return
    this.enemies.list.forEach(enemy => {
      this.currentBattler.attackTo(enemy).then(() => {
        this.increaseTurn()
      })
    })
  }
  get victory () {
    return this.enemies.list.length === 0
  }
  end () {
    this.scene.battleResult(this.group)
    this.scene.scene.resume('Game')
    this.scene.gameScene.blur(false)
    this.destroy()
    this.callback(this)
  }
}
