import { dionysus } from '../event/moonshine'
import { treasure } from '../event/cassandra'
export default {
  area: {
    key: 'forest',
    x: 0, y: 0
  },
  create (scene) {
    dionysus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4), scene.map.getObjectById(2))
    treasure(scene, scene.map.getObjectById(5))
  }
}
