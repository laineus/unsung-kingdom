import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest_all',
    x: 700, y: 460
  },
  enemyLevel: 5,
  enemyGroups: [
    ['slime', 'slime', 'slime'],
    ['bee2', 'slime', 'bee2'],
    ['bee', 'bee', 'bee', 'bee']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd1')
  }
}
