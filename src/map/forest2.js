import { dogEventHunter } from '../event/dogEvent'
export default {
  area: {
    key: 'forest_all',
    x: 750, y: 780
  },
  enemyLevel: 1,
  enemyGroups: [
    ['torrent', 'torrent'],
    ['torrent', 'torrent', 'torrent']
  ],
  create (scene) {
    dogEventHunter(scene, scene.map.getObjectById(4))
  }
}
