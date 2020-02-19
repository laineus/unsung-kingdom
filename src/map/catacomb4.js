import { dario } from '../event/dario'
export default {
  enemyLevel: 1,
  enemyGroups: [
    ['phantom', 'phantom'],
    ['phantom', 'phantom', 'phantom']
  ],
  create (scene) {
    const dr = scene.map.getObjectById(5)
    dario(scene, dr)
  }
}
