import { lute } from '../event/lute'
export default {
  name: 'グリファルデ神殿 - 東部',
  enemyLevel: 33,
  enemyGroups: [
    ['tree', 'tree'],
    ['bird', 'tree', 'bird'],
    ['thief', 'thief'],
    ['tree', 'thief']
  ],
  create (scene) {
    const poets = scene.map.getObjectById(2)
    lute(scene, poets)
  }
}
