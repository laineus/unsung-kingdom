import { marianne } from '../event/marianne'
export default {
  name: '聖アンテルスの墓地 - 共同墓地南',
  enemyLevel: 23,
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
