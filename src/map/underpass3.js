import { doorEvent } from '../event/princess'
export default {
  enemyLevel: 9,
  enemyGroups: [
    ['goblin', 'goblin', 'goblin'],
    ['goblin', 'goblin', 'goblin', 'goblin'],
    ['carbuncle'],
    ['carbuncle', 'carbuncle'],
    ['carbuncle', 'carbuncle', 'carbuncle']
  ],
  create (scene) {
    const door = scene.map.getObjectById(4)
    doorEvent(scene, door)
  }
}
