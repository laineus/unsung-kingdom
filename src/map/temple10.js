import { lute } from '../event/lute'
export default {
  name: 'グリファルデ神殿 - 東部',
  enemyLevel: 24,
  enemyGroups: [
  ],
  create (scene) {
    const poets = scene.map.getObjectById(2)
    lute(scene, poets)
  }
}
