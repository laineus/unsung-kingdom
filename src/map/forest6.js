import { dogEventFound } from '../event/dogEvent'
import { mercenary2 } from '../event/mercenary'
export default {
  enemyLevel: 3,
  enemyGroups: [
    ['torrent', 'torrent'],
    ['torrent', 'torrent', 'torrent']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), '3')
    mercenary2(scene, scene.map.getObjectById(5), scene.map.getObjectById(4))
  }
}
