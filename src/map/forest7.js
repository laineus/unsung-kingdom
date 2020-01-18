import { dogEventFound } from '../event/dogEvent'
import { mercenary2 } from '../event/mercenary'
export default {
  enemyLevel: 4,
  enemyGroups: [
    ['wolf'],
    ['bee2', 'bee2'],
    ['mandrake', 'mandrake'],
    ['mandrake', 'mandrake', 'mandrake']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd5')
    mercenary2(scene, scene.map.getObjectById(5), scene.map.getObjectById(6))
  }
}
