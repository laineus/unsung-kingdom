import { doorEvent } from '../event/princess'
import { wine } from '../event/cassandra'
export default {
  name: 'トロイア公爵邸の地下通路 - 水路',
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
