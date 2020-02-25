import { princess } from '../event/princess'
import { wine } from '../event/cassandra'
export default {
  create (scene) {
    princess(scene, scene.map.getObjectById(2), scene.map.getObjectById(3))
    wine(scene, scene.map.getObjectById(4), 1)
  }
}
