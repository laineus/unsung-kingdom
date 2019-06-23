import Battler from './Battler'
import Gauge from './Gauge'
export default class EnemyBattler extends Battler {
  constructor (scene, status, onTap) {
    super(scene, status)
    // image
    this.sprite = this.scene.add.sprite(0, 0, 'torrent')
    this.sprite.setScale(1)
    this.add(this.sprite)
    // tapArea
    this.tapArea = this.scene.add.rectangle(0, 0, 200, 200).setInteractive()
    this.tapArea.on('pointerdown', pointer => {
      onTap(this)
    })
    this.add(this.tapArea)
    // name
    this.nameLabel = this.scene.add.text(0, -105, 'トレント Lv 6', { fill: '#AAAAAA', stroke: '#222', strokeThickness: 2, fontSize: 12, fontStyle: 'bold', fontFamily: 'Ubuntu' }).setOrigin(0.5, 1)
    this.add(this.nameLabel)
    // hp
    this.hpMaxLabel = this.scene.add.text(0, -86, '/200', { fill: '#FFEEBB', stroke: '#222', strokeThickness: 2, fontSize: 12, fontStyle: 'bold', fontFamily: 'Ubuntu' }).setOrigin(0, 1)
    this.add(this.hpMaxLabel)
    this.hpValueLabel = this.scene.add.text(0, -85, '180', { fill: '#FFEEBB', stroke: '#222', strokeThickness: 2, fontSize: 16, fontStyle: 'bold', fontFamily: 'Ubuntu' }).setOrigin(1, 1)
    this.add(this.hpValueLabel)
    // gauge
    this.gauge = new Gauge(this.scene, 100, 7, this.maxHp, 0xEE8811).setPosition(0, -80)
    this.add(this.gauge)
  }
  die () {
    this.sprite.setTint(0xFF0000)
    this.scene.add.tween({
      targets: this.sprite, duration: 300, ease: 'Power2',
      scaleX: 1.3, scaleY: 1.3, alpha: 0.2,
      onComplete: () => this.destroy()
    })
  }
}
