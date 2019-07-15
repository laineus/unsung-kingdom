import { dogEventHunter } from '../event/dogEvent'
export default {
  enemyLevel: 1,
  enemyGroups: [
    ['torrent', 'torrent'],
    ['torrent', 'torrent', 'torrent']
  ],
  create (scene) {
    dogEventHunter(scene, scene.map.getObjectById(4))
  }
}
