import { allsRight } from '../event/allsRight'
export default {
  name: `${t('area.temple')} - ${t('areaSub.temple.d')}`,
  bgm: 'temple',
  battleBgm: 'temple',
  enemyLevel: 37,
  enemyGroups: [
    ['bird'],
    ['bird', 'bird'],
    ['lizard'],
    ['lizard', 'lizard'],
    ['bird', 'lizard', 'bird']
  ],
  create (scene) {
    const zi = scene.map.getObjectById(3).setRandomWalk(true)
    allsRight(scene, zi)
  }
}
