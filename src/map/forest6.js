import { dogEventFound } from '../event/dogEvent'
import { mercenary2 } from '../event/mercenary'
export default {
  area: {
    key: 'forest',
    x: 368, y: 784
  },
  enemyLevel: 3,
  enemyGroups: [
    ['slime', 'slime'],
    ['slime', 'slime', 'slime'],
    ['bee2'],
    ['bee', 'bee'],
    ['bee', 'bee2', 'bee'],
    ['mandrake', 'slime', 'mandrake'],
    ['mandrake', 'mandrake']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), 'd3')
    mercenary2(scene, scene.map.getObjectById(5), scene.map.getObjectById(4))
  }
}
