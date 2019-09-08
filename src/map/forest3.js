import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest_all',
    x: 700, y: 460
  },
  enemyLevel: 5,
  enemyGroups: [
    ['wolf'],
    ['wolf', 'wolf'],
    ['bee2', 'bee', 'bee', 'bee2']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd1')
  }
}
