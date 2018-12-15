import Character from './Character'
export default class Player extends Character {
  constructor (scene, x, y) {
    super(scene, x, y, 'player')
  }
  update () {
    super.update()
  }
}
