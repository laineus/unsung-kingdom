import { appleCollection } from '../event/lute'
export default {
  name: 'グリファルデ神殿 - 東部',
  enemyLevel: 24,
  enemyGroups: [
  ],
  create (scene) {
    Array.range(4, 9).forEach(id => appleCollection(scene, scene.map.getObjectById(id), `a8_${id}`))
  }
}
