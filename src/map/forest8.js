import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest_all',
    x: 176, y: 448
  },
  enemyLevel: 5,
  enemyGroups: [
    ['torrent', 'torrent'],
    ['torrent', 'torrent', 'torrent']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), '5')
  }
}
