import { ferdinand } from '../event/ferdinand'
export default {
  name: `${t('area.catacomb')} - ${t('areaSub.catacomb.c')}`,
  bgm: 'catacomb',
  enemyLevel: 21,
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
