import { evangelina } from '../event/evangelina'
export default {
  enemyLevel: 23,
  enemyGroups: [
    ['skull', 'spectre', 'skull'],
    ['spectre', 'spectre'],
    ['wraith', 'spectre'],
    ['wraith', 'wraith']
  ],
  create (scene) {
    const queen = scene.map.getObjectById(3)
    const queen2 = scene.map.getObjectById(4)
    evangelina(scene, queen, queen2)
  }
}
