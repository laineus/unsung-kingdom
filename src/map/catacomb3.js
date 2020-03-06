import { ferdinand } from '../event/ferdinand'
export default {
  name: '聖アンテルスの墓地 - 共同墓地',
  enemyLevel: 15,
  enemyGroups: [
    ['phantom'],
    ['phantom', 'phantom'],
    ['phantom', 'skull'],
    ['skull', 'skull', 'skull'],
    ['ghost']
  ],
  create (scene) {
    const fdn = scene.map.getObjectById(3)
    ferdinand(scene, fdn)
  }
}
