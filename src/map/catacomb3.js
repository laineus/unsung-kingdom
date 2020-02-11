import { ferdinand } from '../event/ferdinand'
export default {
  create (scene) {
    const fdn = scene.map.getObjectById(3)
    ferdinand(scene, fdn)
  }
}
