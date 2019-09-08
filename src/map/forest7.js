import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest_all',
    x: 448, y: 446
  },
  enemyLevel: 4,
  enemyGroups: [
    ['slime', 'slime'],
    ['bee2', 'bee2'],
    ['bee', 'bee', 'bee'],
    ['mandrake', 'mandrake'],
    ['mandrake', 'mandrake', 'mandrake']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd4')
  }
}
