import { evangelina } from '../event/evangelina'
export default {
  name: `${t('area.catacomb')} - ${t('areaSub.catacomb.g')}`,
  bgm: 'catacomb',
  enemyLevel: 29,
  enemyGroups: [
    ['skull', 'spectre', 'skull'],
    ['spectre', 'spectre'],
    ['wraith', 'spectre'],
    ['wraith', 'wraith'],
    ['dullahan'],
    ['dullahan', 'dullahan']
  ],
  create (scene) {
    const queen = scene.map.getObjectById(3)
    const queen2 = scene.map.getObjectById(4)
    const grave = scene.map.getObjectById(6)
    evangelina(scene, queen, queen2, grave)
  }
}
