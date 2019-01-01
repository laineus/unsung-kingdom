import Character from './Character'
export default class Enemy extends Character {
  constructor (scene, x, y) {
    super(scene, x, y, 'player')
  }
  preUpdate () {
    super.preUpdate()
  }
}
