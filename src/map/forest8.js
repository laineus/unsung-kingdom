import { dogEventFound } from '../event/dogEvent'
export default {
  enemyLevel: 5,
  enemyGroups: [
    ['torrent', 'torrent'],
    ['torrent', 'torrent', 'torrent']
  ],
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), '5')
  }
}
