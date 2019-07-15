import { dogEventFound } from '../event/dogEvent'
import { mercenary1 } from '../event/mercenary'
export default {
  enemyLevel: 2,
  enemyGroups: [
    ['torrent', 'torrent'],
    ['torrent', 'torrent', 'torrent']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), '2')
    mercenary1(scene, scene.map.getObjectById(4), scene.map.getObjectById(5))
  }
}
