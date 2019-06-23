import config from '../data/config'
import EnemyBattler from './EnemyBattler'
import PlayerBattler from './PlayerBattler'
import Button from './Button'
const positions = {
  1: [0],
  2: [-130, 130],
  3: [-200, 0, 200],
  4: [-240, -80, 80, 240],
  5: [-260, -130, 0, 130, 260],
}
export default class Battle extends Phaser.GameObjects.Container {
  constructor (scene, callback) {
    super(scene)
    this.scene = scene
    this.callback = callback
    scene.add.existing(this)
    scene.scene.pause('Game')
    this.scene.gameScene.blur(true)
    this.overlay = this.scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x886644, 100).setOrigin(0, 0)
    this.overlay.blendMode = 1
    this.window = this.scene.add.sprite(0, 0, 'dark').setOrigin(0, 0)
    this.enemies = this.scene.add.container(0, 0)
    this.players = this.scene.add.container(0, 0)
    this.buttons = this.scene.add.container(0, 0)
    this.add([this.overlay, this.window, this.enemies, this.players, this.buttons])
    // test image
    const sampleStatus1 = { hp: 35, atk: 4, def: 3, dex: 2, agi: 2 }
    this.enemies.add(new EnemyBattler(this.scene, sampleStatus1, this.tapEnemy.bind(this)).setPosition(config.WIDTH.half, config.HEIGHT.half - 50))
    this.enemies.add(new EnemyBattler(this.scene, sampleStatus1, this.tapEnemy.bind(this)).setPosition(config.WIDTH.half, config.HEIGHT.half - 50))
    this.enemies.add(new EnemyBattler(this.scene, sampleStatus1, this.tapEnemy.bind(this)).setPosition(config.WIDTH.half, config.HEIGHT.half - 50))
    this.enemies.add(new EnemyBattler(this.scene, sampleStatus1, this.tapEnemy.bind(this)).setPosition(config.WIDTH.half, config.HEIGHT.half - 50))
    this.enemies.add(new EnemyBattler(this.scene, sampleStatus1, this.tapEnemy.bind(this)).setPosition(config.WIDTH.half, config.HEIGHT.half - 50))
    // test image
    const sampleStatus2 = { hp: 50, atk: 15, def: 5, dex: 4, agi: 3 }
    this.players.add(new PlayerBattler(this.scene, sampleStatus2).setPosition(config.WIDTH.half - 310, (70).byBottom))
    this.players.add(new PlayerBattler(this.scene, sampleStatus2).setPosition(config.WIDTH.half, (70).byBottom))
    this.players.add(new PlayerBattler(this.scene, sampleStatus2).setPosition(config.WIDTH.half + 310, (70).byBottom))
    Number(this.enemies.length).toArray.forEach(() => {
      const box = new Button(this.scene, 20, 0, 'Attack', 120, 40)
      box.line = this.scene.add.line(116, 20, 0, 0, 100, 0, 0xFFFFFF).setOrigin(0, 0).setLineWidth(0.5).setAlpha(0.5)
      box.circle = this.scene.add.circle(116, 21, 2, 0xFFFFFF).setOrigin(0.5, 0.5)
      box.add([box.line, box.circle])
      this.buttons.add(box)
    })
    // register
    this.all = []
    this.players.list.forEach(v => this.all.push(v))
    this.enemies.list.forEach(v => this.all.push(v))
    this.turnIndex = -1
    this.increaseTurn()
  }
  preUpdate () {
    if (this.victory) this.end()
    this.enemies.list.forEach((v, i) => {
      v.x = config.WIDTH.half + positions[this.enemies.length][i]
    })
    this.buttons.list.forEach((v, i) => {
      if (i >= this.enemies.length) v.destroy()
    })
    this.buttons.list.forEach((button, i) => {
      button.visible = this.playerTurn
      const y = 370 + (this.enemies.length * -52) + (i * 52)
      button.y = y
      button.line.geom.x2 = 340 + positions[this.enemies.length][i]
      button.circle.x = 460 + positions[this.enemies.length][i]
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
    if (!this.playerTurn) return this.execEnemyTurn()
  }
  execEnemyTurn () {
    setTimeout(() => {
      this.currentBattler.attackTo(this.players.list.random())
      // this.players.list[0].addDamage(Math.randomInt(10, 20))
      this.increaseTurn()
    }, 1000)
  }
  tapEnemy (enemy) {
    if (!this.playerTurn) return
    this.currentBattler.attackTo(enemy)
    // enemy.addDamage(Math.randomInt(60, 200))
    this.increaseTurn()
  }
  get victory () {
    return this.enemies.list.length === 0
  }
  end () {
    this.scene.scene.resume('Game')
    this.scene.gameScene.blur(false)
    this.destroy()
    this.callback(this)
  }
}
