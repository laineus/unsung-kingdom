import { dogEventFound } from '../event/dogEvent'
export default {
  area: {
    key: 'forest_all',
    x: 448, y: 446
  },
  enemyLevel: 4,
  enemyGroups: [
    ['torrent', 'torrent'],
    ['torrent', 'torrent', 'torrent']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), '4')
  }
}
