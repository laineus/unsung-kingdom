import { dionysus } from '../event/moonshine'
import { treasure } from '../event/cassandra'
export default {
  enemyLevel: 10,
  enemyGroups: [
    ['goblin', 'goblin'],
    ['carbuncle', 'carbuncle'],
    ['gargoyle', 'gargoyle'],
    ['succubus']
  ],
  create (scene) {
    dionysus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4), scene.map.getObjectById(2))
    treasure(scene, scene.map.getObjectById(5))
  }
}
