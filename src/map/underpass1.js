import { cassandra } from '../event/cassandra'
import { lamp } from '../event/aragnie'
export default {
  enemyLevel: 8,
  enemyGroups: [
    ['goblin'],
    ['goblin', 'goblin'],
    ['goblin', 'goblin', 'goblin']
  ],
  create (scene) {
    const jail = this.getJail(scene)
    const cas = scene.map.getObjectById(3)
    const hector = scene.map.getObjectById(6)
    const mary = scene.map.getObjectById(7)
    const loretta = scene.map.getObjectById(8)
    cassandra(scene, scene.map.getObjectById(2), cas, scene.map.getObjectById(4), scene.map.getObjectById(5))
    lamp(scene, cas, hector, mary, loretta, jail, scene.map.getObjectById(9), scene.map.getImageByName('aragnie_yarn'))
  },
  getJail (scene) {
    const jail = scene.map.getImageByName('jail')
    scene.physics.add.existing(jail)
    jail.body.setImmovable(true)
    scene.physics.add.collider([jail], scene.substances)
    return jail
  }
}
