import { dionysus } from '../event/moonshine'
import { treasure } from '../event/cassandra'
export default {
  create (scene) {
    dionysus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4), scene.map.getObjectById(2))
    treasure(scene, scene.map.getObjectById(5))
  }
}
