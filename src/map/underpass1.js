import { cassandra } from '../event/cassandra'
import { aragnie } from '../event/aragnie'
export default {
  enemyLevel: 7,
  enemyGroups: [
    ['goblin']
  ],
  create (scene) {
    const cas = scene.map.getObjectById(3)
    const hector = scene.map.getObjectById(6)
    const mary = scene.map.getObjectById(7)
    const loretta = scene.map.getObjectById(8)
    cassandra(scene, scene.map.getObjectById(2), cas, scene.map.getObjectById(4), scene.map.getObjectById(5))
    aragnie(scene, cas, hector, mary, loretta, scene.map.getObjectById(9), scene.map.getImageByName('aragnie_yarn'))
  }
}
