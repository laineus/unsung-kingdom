import { dogEventHunter } from '../event/dogEvent'
export default {
  name: `${t('area.forest')} - ${t('areaSub.forest.b')}`,
  bgm: 'forest',
  enemyLevel: 1,
  enemyGroups: [
    ['slime', 'slime'],
    ['bee', 'bee2']
  ],
  create (scene) {
    const hunter = scene.map.getObjectById(4).setR('left').setRandomWalk(true)
    dogEventHunter(scene, hunter)
  }
}
