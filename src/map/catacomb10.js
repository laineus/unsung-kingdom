import { renfield } from '../event/renfield'
export default {
  name: `${t('area.catacomb')} - ${t('areaSub.catacomb.f')}`,
  bgm: 'catacomb',
  enemyLevel: 28,
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
