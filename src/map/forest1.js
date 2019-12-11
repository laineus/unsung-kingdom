import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest',
    x: 1024, y: 528
  },
  enemyLevel: 1,
  enemyGroups: [
    ['slime'],
    ['bee']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), 'd1')
  }
}
