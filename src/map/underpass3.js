import { doorEvent } from '../event/princess'
import { wine } from '../event/cassandra'
export default {
  name: `${t('area.underpass')} - ${t('areaSub.underpass.c')}`,
  bgm: 'underpass',
  enemyLevel: 13,
  enemyGroups: [
    ['goblin', 'goblin', 'goblin'],
    ['goblin', 'goblin', 'goblin', 'goblin'],
    ['carbuncle'],
    ['carbuncle', 'carbuncle'],
    ['carbuncle', 'carbuncle', 'carbuncle']
  ],
  create (scene) {
    const door = scene.map.getObjectById(4)
    doorEvent(scene, door)
    wine(scene, scene.map.getObjectById(8), 1)
  }
}
