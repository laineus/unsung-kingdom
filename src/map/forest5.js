import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest',
    x: 640, y: 1050
  },
  enemyLevel: 2,
  enemyGroups: [
    ['slime'],
    ['slime', 'slime'],
    ['bee', 'bee'],
    ['bee', 'bee2']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), 'd2')
  }
}
