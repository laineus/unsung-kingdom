import { renfield } from '../event/renfield'
export default {
  name: '聖アンテルスの墓地 - 上流階級の墓',
  enemyLevel: 22,
  enemyGroups: [
    ['skull', 'spectre', 'skull'],
    ['spectre', 'spectre'],
    ['wraith', 'spectre'],
    ['wraith', 'wraith'],
    ['dullahan'],
    ['dullahan', 'dullahan']
  ],
  create (scene) {
    const ray = scene.map.getObjectById(2)
    const spectres = (5).toArray().map(i => scene.map.getObjectById(i + 3))
    renfield(scene, ray, spectres)
  }
}
