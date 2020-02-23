import { ferdinand } from '../event/ferdinand'
export default {
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
