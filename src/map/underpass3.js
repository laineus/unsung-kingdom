import { doorEvent } from '../event/princess'
export default {
  enemyLevel: 1,
  enemyGroups: [
    ['carbuncle', 'carbuncle', 'carbuncle', 'carbuncle']
  ],
  create (scene) {
    const door = scene.map.getObjectById(4)
    doorEvent(scene, door)
  }
}
