import { doorEvent } from '../event/princess'
export default {
  area: {
    key: 'forest',
    x: 0, y: 0
  },
  enemyLevel: 1,
  enemyGroups: [
    ['carbuncle', 'carbuncle', 'carbuncle', 'carbuncle']
  ],
  create (scene) {
    const door = scene.map.getObjectById(4)
    doorEvent(scene, door)
  }
}
