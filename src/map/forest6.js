import { dogEventFound } from '../event/dogEvent'
import { mercenary2 } from '../event/mercenary'
export default {
  area: {
    key: 'forest_all',
    x: 368, y: 784
  },
  enemyLevel: 3,
  enemyGroups: [
    ['torrent', 'torrent'],
    ['torrent', 'torrent', 'torrent']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), 'd3')
    mercenary2(scene, scene.map.getObjectById(5), scene.map.getObjectById(4))
  }
}
