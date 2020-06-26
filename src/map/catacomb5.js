import { marianne } from '../event/marianne'
export default {
  name: `${t('area.catacomb')} - ${t('areaSub.catacomb.d')}`,
  bgm: 'catacomb',
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
