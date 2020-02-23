import { marianne } from '../event/marianne'
export default {
  enemyLevel: 17,
  enemyGroups: [
    ['phantom', 'skull'],
    ['skull', 'phantom', 'skull', 'phantom'],
    ['ghost'],
    ['ghost', 'ghost']
  ],
  create (scene) {
    const sister = scene.map.getObjectById(2)
    marianne(scene, sister)
  }
}
