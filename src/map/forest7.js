import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest_all',
    x: 448, y: 446
  },
  enemyLevel: 4,
  enemyGroups: [
    ['slime', 'slime'],
    ['bee', 'bee'],
    ['bee', 'bee2', 'bee', 'bee2'],
    ['mandrake', 'mandrake']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd4')
  }
}
