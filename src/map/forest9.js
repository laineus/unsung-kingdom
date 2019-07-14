import { drystan } from '../event/drystan'
export default {
  create (scene) {
    drystan(scene, scene.map.getObjectById(3), scene.map.getObjectById(2))
  }
}
