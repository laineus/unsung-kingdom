import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest',
    x: 176, y: 448
  },
  enemyLevel: 5,
  enemyGroups: [
    ['wolf'],
    ['wolf', 'wolf'],
    ['slime', 'slime', 'slime', 'slime'],
    ['bee', 'bee2', 'bee', 'bee2'],
    ['mandrake', 'mandrake'],
    ['mandrake', 'mandrake', 'mandrake']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), 'd5')
  }
}
