import { cassandra } from '../event/cassandra'
export default {
  area: {
    key: 'forest',
    x: 0, y: 0
  },
  create (scene) {
    cassandra(scene, scene.map.getObjectById(2), scene.map.getObjectById(3), scene.map.getObjectById(4), scene.map.getObjectById(5))
  }
}
