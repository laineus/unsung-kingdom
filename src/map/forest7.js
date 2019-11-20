import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest',
    x: 448, y: 446
  },
  enemyLevel: 4,
  enemyGroups: [
    ['wolf'],
    ['bee2', 'bee2'],
    ['mandrake', 'mandrake'],
    ['mandrake', 'mandrake', 'mandrake']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd4')
  }
}
