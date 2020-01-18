import { dogEventFound } from '../event/dogEvent'
export default {
  enemyLevel: 1,
  enemyGroups: [
    ['slime'],
    ['bee']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd1')
  }
}
