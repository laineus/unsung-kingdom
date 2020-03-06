import { dogEventFound } from '../event/dogEvent'
import { mercenary1 } from '../event/mercenary'
export default {
  name: 'ワルコフォレンスの森 - キャンプ',
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
    dogEventFound(scene, scene.map.getObjectById(3), 'd4')
    mercenary1(scene, scene.map.getObjectById(6), scene.map.getObjectById(7), scene.map.getObjectById(8))
  }
}
