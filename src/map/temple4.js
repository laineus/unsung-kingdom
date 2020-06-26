import { architect } from '../event/lorraine'
export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.c')}`,
  bgm: 'temple',
  battleBgm: 'temple',
  enemyLevel: 35,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird'],
    ['lizard'],
    ['lizard', 'lizard'],
    ['bird', 'lizard', 'bird']
  ],
  create (scene) {
    const arct = scene.map.getObjectById(3).setRandomWalk(true)
    architect(scene, arct)
  }
}
