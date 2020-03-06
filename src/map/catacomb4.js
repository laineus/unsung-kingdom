import { dario } from '../event/dario'
export default {
  name: '聖アンテルスの墓地 - 共同墓地',
  enemyLevel: 16,
  enemyGroups: [
    ['phantom', 'phantom'],
    ['phantom', 'phantom', 'phantom'],
    ['skull', 'ghost', 'skull'],
    ['ghost'],
    ['ghost', 'ghost']
  ],
  create (scene) {
    const dr = scene.map.getObjectById(5).setRandomWalk(true)
    dario(scene, dr)
  }
}
