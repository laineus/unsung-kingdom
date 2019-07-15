import { dogEventFound } from '../event/dogEvent'
export default {
  enemyLevel: 4,
  enemyGroups: [
    ['torrent', 'torrent'],
    ['torrent', 'torrent', 'torrent']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(4), '4')
  }
}
