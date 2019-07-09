import dogEvent from './dogEvent'
import { mercenary1 } from '../event/mercenary'
export default {
  create (scene) {
    dogEvent(scene, scene.map.getObjectById(3), '2')
    mercenary1(scene, scene.map.getObjectById(4))
  }
}
