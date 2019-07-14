import { rexBear } from '../event/drystan'
export default {
  create (scene) {
    rexBear(scene, scene.map.getObjectById(3))
  }
}
