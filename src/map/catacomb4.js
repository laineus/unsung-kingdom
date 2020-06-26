import { dario } from '../event/dario'
export default {
  name: `${t('area.catacomb')} - ${t('areaSub.catacomb.c')}`,
  bgm: 'catacomb',
  enemyLevel: 22,
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
