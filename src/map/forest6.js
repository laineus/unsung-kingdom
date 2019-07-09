import { dogEventFound } from '../event/dogEvent'
import { mercenary2 } from '../event/mercenary'
export default {
  create (scene) {
    dogEventFound(scene, scene.map.getObjectById(3), '3')
    mercenary2(scene, scene.map.getObjectById(4))
  }
}
