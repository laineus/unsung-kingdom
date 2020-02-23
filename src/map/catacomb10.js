import { renfield } from '../event/renfield'
export default {
  enemyLevel: 22,
  enemyGroups: [
    ['skull', 'spectre', 'skull'],
    ['spectre', 'spectre'],
    ['wraith', 'spectre'],
    ['wraith', 'wraith']
  ],
  create (scene) {
    const ray = scene.map.getObjectById(2)
    const spectres = (5).toArray().map(i => scene.map.getObjectById(i + 3))
    renfield(scene, ray, spectres)
  }
}
