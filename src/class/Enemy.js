import Character from './Character'
export default class Enemy extends Character {
  constructor (scene, x, y) {
    super(scene, x, y, 'player')
    this.setHp(100)
    this.setTapEvent(() => {
      scene.player.setTarget(this)
    })
  }
  preUpdate () {
    super.preUpdate()
  }
}
